import React, { useState, useCallback } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
	const [showParagraph, setShowPragragh] = useState();

	console.log("APP RUNNING");

	const toggleParagraphHandler = useCallback(() => {
		setShowPragragh((prevShowParagraph) => !prevShowParagraph);
	}, []);
	return (
		<div className="app">
			<h1>Hello</h1>
			<DemoOutput show={showParagraph} />
			<Button onClick={toggleParagraphHandler}>Show</Button>
		</div>
	);
}

export default App;
