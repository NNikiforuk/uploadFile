import "./Card.css";

const Card = ({header, text}) => {
	return (
		<div className="card">
			<div className="description">
				<h1>{header}</h1>
				<p>{text}</p>
			</div>
			<div className="upload">
			</div>
		</div>
	);
};

export default Card;
