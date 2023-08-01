type Props = {
	setCopiedLink: (copiedLink: string) => void;
	copiedLink: string;
};

const Sent = ({ setCopiedLink, copiedLink }: Props) => {
	const handleCopy = () => {
		navigator.clipboard.writeText(copiedLink);
	};

	return (
		<div className="sent">
			<p className="card_text">Please copy link</p>
			<div>
				<input
					className="sent_input"
					type="text"
					onChange={(e) => setCopiedLink(e.target.value)}
				/>
			</div>
			<div className="copy_btn" onClick={handleCopy}>
				<img className="copy_icon" alt="sent icon" src="src/assets/copy.png" />
			</div>
		</div>
	);
};

export default Sent;
