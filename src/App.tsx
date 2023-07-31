import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { useState } from "react";
import Tabs from "./components/Tabs";

function App() {
	const [wantSend, setWantSend] = useState<boolean>(true);

	return (
		<div className="app">
			<Navbar />
			<main className="main">
				<Tabs wantSend={wantSend} setWantSend={setWantSend} />
				<Card wantSend={wantSend} />
			</main>
		</div>
	);
}

export default App;
