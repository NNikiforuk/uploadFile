import { ChangeEvent, useState } from "react";

import "./Card.css";
import {
	header_sending,
	text_sending,
	header_receiving,
	text_receiving,
} from "../data/texts";

const Card = ({ wantSend }: { wantSend: boolean }) => {
	const [file, setFile] = useState<File>();

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFile(e.target.files[0]);
		}
	};

	const handleSendClick = () => {
		if (!file) {
			return;
		}

		// 		// 👇 Uploading the file using the fetch API to the server
		//     fetch('https://httpbin.org/post', {
		//       method: 'POST',
		//       body: file,
		//       // 👇 Set headers manually for single file upload
		//       headers: {
		//         'content-type': file.type,
		//         'content-length': `${file.size}`, // 👈 Headers need to be a string
		//       },
		//     })
		//       .then((res) => res.json())
		//       .then((data) => console.log(data))
		//       .catch((err) => console.error(err));
		//   };
	};

	return (
		<div className="card">
			<div className="description">
				<h1 className="card_header">
					{wantSend ? header_sending : header_receiving}
				</h1>
				<p className="card_text">{wantSend ? text_sending : text_receiving}</p>
			</div>
			<div className="upload">
				<div className="upload_text upload_textUp">Drop the file</div>
				<div className="upload_text">or</div>

				<div className="input_container">
					<input type="file" onChange={handleFileChange} />
				</div>

				<button className="upload_btn" onClick={handleSendClick}>Send</button>
			</div>
		</div>
	);
};

export default Card;
