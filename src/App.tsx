import { Route, Routes } from "react-router";
import Login from "./pages/loginPage/login";
import "./index.css";
export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			{/* <Route path="/about" element={<About />} />
			<Route path="*" element={<NotFound />} /> */}
		</Routes>
	);
}
