import { useState } from "react";
import "./Tabs.css";

type Props = {
	setWantSend: (wantSend: boolean) => void;
};

const Tabs = ({ setWantSend }: Props) => {
	const [activeTab, setActiveTab] = useState<string>("send");

	const handleTabChange = (tab: string) => {
		if (tab === "send") {
			setWantSend(true);
			setActiveTab("send");
		} else {
			setWantSend(false);
			setActiveTab("receive");
		}
	};

	return (
		<div className="tabs">
			<button
				className={`tab tab_send ${activeTab === "send" ? "tab_active" : ""}`}
				onClick={() => handleTabChange("send")}
			>
				Send
			</button>
			<button
				className={`tab tab_receive ${
					activeTab === "receive" ? "tab_active" : ""
				}`}
				onClick={() => handleTabChange("receive")}
			>
				Receive
			</button>
		</div>
	);
};

export default Tabs;
