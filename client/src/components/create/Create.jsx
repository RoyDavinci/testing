import React, { useState, useEffect } from "react";
import "./create.css";
import axios from "axios";
import { useNavigate } from "react-router";

const Create = () => {
	const navigate = useNavigate();

	const [input, setInput] = useState({
		name: "",
		title: "",
		start_date: "",
		note: "",
	});
	const handleInputChange = (e) => {
		const { name, value } = e.target;

		setInput({
			...input,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		let { data } = await axios.post("http://localhost:8200/api/v1/todo", {
			name: input.name,
			title: input.title,
			start_date: input.start_date,
			note: input.note,
		});
		console.log(data);
		setInput({
			name: "",
			title: "",
			start_date: "",
			note: "",
		});
		navigate("/");
	};

	return (
		<div className='createPostContainer'>
			<form onSubmit={handleSubmit}>
				<label>Name : </label>
				<input
					type='text'
					name='name'
					value={input.name}
					onChange={handleInputChange}
					placeholder='name'
				/>
				<label>Title : </label>
				<input
					type='text'
					name='title'
					value={input.title}
					onChange={handleInputChange}
					placeholder='title'
				/>
				<label>Start Date : </label>
				<input
					type='date'
					name='start_date'
					value={input.start_date}
					onChange={handleInputChange}
					placeholder='name'
				/>
				<label>Note:</label>
				<textarea value={input.note} name='note' onChange={handleInputChange} />
				<button type='submit' className='formBtn'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Create;
