import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./components/todo/posts/Posts";
import Create from "./components/todo/create/Create";
import Update from "./components/todo/update/Update";
import Delete from "./components/todo/delete/Delete";
import Login from "./components/user/login/Login";
import Signup from "./components/user/create/Signup.jsx";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Post />} />
				<Route path='/create' element={<Create />} />
				<Route path='/delete/:id' element={<Delete />} />
				<Route path='/update/:id' element={<Update />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
