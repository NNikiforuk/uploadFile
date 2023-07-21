import { ChangeEvent, useState, useRef, useEffect } from "react";

import "./Card.css";
import {
	header_sending,
	text_sending,
	header_receiving,
	text_receiving,
} from "../data/texts";

const Card = ({ wantSend }: { wantSend: boolean }) => {
	const [file, setFile] = useState<File>();
	const [ifDropped, setIfDropped] = useState<boolean>(false);
	const [par1, setPar1] = useState<string>("Drop the file");
	const [par2, setPar2] = useState<string>("or");
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
		}

		return () => {
			if (drop.current) {
				drop.current.removeEventListener("dragover", handleDragOver);
				drop.current.removeEventListener("drop", handleDrop);
			}
		};
	}, []);

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

	return (
		<div className="card">
			<div className="description">
				<h1 className="card_header">
					{wantSend ? header_sending : header_receiving}
				</h1>
				<p className="card_text">{wantSend ? text_sending : text_receiving}</p>
			</div>
			<div className="upload" ref={drop}>
				<div className="upload_text upload_textUp">{par1}</div>
				<div className="upload_text">{par2}</div>

				<div className="input_container">
					{!ifDropped && <input type="file" onChange={handleFileChange} />}
				</div>

				<button className="upload_btn" onClick={handleSendClick}>
					Send
				</button>
			</div>
		</div>
	);
};

export default Card;
