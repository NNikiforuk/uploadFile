import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { useState } from "react";
import header_sending, text_sending from "./data/texts.js";

function App() {
	const [wantSend, setWantSend] = useState(true);

	return (
		<div className="app">
			<Navbar />
			{wantSend ? (
				<Card header={header_sending} />
			) : (
				<Card
					header="Lorem ipsum dolor sit amet, consectetur adipiscing"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat justo quis."
				/>
			)}
		</div>
	);
}

export default App;
