import { useState } from "react";
import "./Tabs.css";

const Tabs = ({
	wantSend,
	setWantSend,
}: {
	wantSend: boolean;
	setWantSend: boolean;
}) => {
	const [activeTab, setActiveTab] = useState<string>("send");

	const handleTabChange = (tab: string) => {};

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
