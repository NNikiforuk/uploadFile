import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { useState } from "react";
import {
	header_sending,
	text_sending,
	header_receiving,
	text_receiving,
} from "./data/texts.js";

function App() {
	const [wantSend, setWantSend] = useState<boolean>(true);

	return (
		<div className="app">
			<Navbar />
			{wantSend ? (
				<Card header={header_sending} text={text_sending} />
			) : (
				<Card header={header_receiving} text={text_receiving} />
			)}
		</div>
	);
}

export default App;
