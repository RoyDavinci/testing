import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./components/posts/Posts";
import Create from "./components/create/Create";
import Update from "./components/update/Update";
import Delete from "./components/delete/Delete";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Post />} />
				<Route path='/create' element={<Create />} />
				<Route path='/delete/:id' element={<Delete />} />
				<Route path='/update/:id' element={<Update />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
