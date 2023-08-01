import { ChangeEvent, useState, useRef, useEffect } from "react";

import "./Card.css";
import {
	header_sending,
	text_sending,
	header_receiving,
	text_receiving,
} from "../data/texts";
import Sent from "./Sent";
import Receive from "./Receive";

type Props = {
	wantSend: boolean;
	sent: boolean;
	setSent: (sent: boolean) => void;
};

const Card = ({ wantSend, sent, setSent }: Props) => {
	const [file, setFile] = useState<File>();
	const [ifDropped, setIfDropped] = useState<boolean>(false);
	const [par1, setPar1] = useState<string>("Drop the file");
	const [par2, setPar2] = useState<string>("or");
	const [dragging, setDragging] = useState<boolean>(false);
	const [copiedLink, setCopiedLink] = useState<string>("");

	const drop = useRef<HTMLDivElement>(null);

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFile(e.target.files[0]);
		}
	};

	const handleSendClick = () => {
		if (!file) {
			return;
		}

		//Fetching
	};

	useEffect(() => {
		if (drop.current) {
			drop.current.addEventListener("dragover", handleDragOver);
			drop.current.addEventListener("drop", handleDrop);
			drop.current.addEventListener("dragenter", handleDragEnter);
			drop.current.addEventListener("dragleave", handleDragLeave);
		}

		return () => {
			if (drop.current) {
				drop.current.removeEventListener("dragover", handleDragOver);
				drop.current.removeEventListener("drop", handleDrop);
				drop.current.removeEventListener("dragenter", handleDragEnter);
				drop.current.removeEventListener("dragleave", handleDragLeave);
			}
		};
	}, []);

	const handleDragEnter = (e: DragEvent) => {
		e.preventDefault();
		e.stopPropagation();

		setDragging(true);
	};

	const handleDragLeave = (e: DragEvent) => {
		e.preventDefault();
		e.stopPropagation();

		setDragging(false);
	};

	const handleDragOver = (e: DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
	};

	const handleDrop = (e: DragEvent) => {
		e.preventDefault();
		e.stopPropagation();

		if (e.dataTransfer) {
			const { files } = e.dataTransfer;

			if (files && files.length) {
				setPar1(files[0].name);
				setIfDropped(true);
				setPar2("");
			}
		}
	};

	const handleReturn = () => {
		setSent(false);
	};

	return (
		<>
			{sent ? (
				<div className="card">
					<div className="back_container" onClick={handleReturn}>
						<img
							className="back_icon"
							src="/src/assets/back.png"
							alt="come back icon"
						/>
					</div>

					<Sent setCopiedLink={setCopiedLink} copiedLink={copiedLink} />
				</div>
			) : (
				<div className="card">
					<div className="description">
						<h1 className="card_header">
							{wantSend ? header_sending : header_receiving}
						</h1>
						<p className="card_text">
							{wantSend ? text_sending : text_receiving}
						</p>
					</div>
					{wantSend ? (
						<div className={"upload " + (dragging && "active")} ref={drop}>
							<div className="upload_text upload_textUp">{par1}</div>
							<div className="upload_text">{par2}</div>

							<div className="input_container">
								{!ifDropped && (
									<input type="file" onChange={handleFileChange} />
								)}
							</div>

							<button className="upload_btn" onClick={handleSendClick}>
								Send
							</button>
						</div>
					) : (
						<Receive />
					)}
				</div>
			)}
		</>
	);
};

export default Card;
