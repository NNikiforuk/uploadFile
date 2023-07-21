import "./Card.css";
import {
	header_sending,
	text_sending,
	header_receiving,
	text_receiving,
} from "../data/texts";

const Card = ({ wantSend }: { wantSend: boolean }) => {
	return (
		<div className="card">
			<div className="description">
				<h1 className="card_header">{wantSend ? header_sending : header_receiving}</h1>
				<p className="card_text">{wantSend ? text_sending : text_receiving}</p>
			</div>
			<div className="upload"></div>
		</div>
	);
};

export default Card;
