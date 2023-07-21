import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { useState } from "react";

function App() {
	const [wantSend, setWantSend] = useState<boolean>(true);

	return (
		<div className="app">
			<Navbar />
			<Card wantSend={wantSend} />
		</div>
	);
}

export default App;
