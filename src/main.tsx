import App from "./App.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";

const rootElement = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(rootElement);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
);
