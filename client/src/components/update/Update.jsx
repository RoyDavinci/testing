import React, { useState, useEffect } from "react";
import "./update.css";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import moment from "moment";

const Update = () => {
	const navigate = useNavigate();
	const { id } = useParams();
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
		let { data } = await axios.patch(
			`http://localhost:8200/api/v1/todo/${id}`,
			{
				name: input.name,
				title: input.title,
				start_date: input.start_date,
				note: input.note,
			}
		);
		navigate("/");
	};

	useEffect(() => {
		const getData = async () => {
			let { data } = await axios.get(`http://localhost:8200/api/v1/todo/${id}`);
			setInput({
				note: data.note,
				title: data.title,
				start_date: moment().format("YYYY-MM-DD", input.start_date),
				name: data.name,
			});
		};
		getData();
		return () => {
			console.log("cleaned up");
		};
	}, [id, input.start_date]);
	return (
		<div>
			<div className='updatePostContainer'>
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
					<textarea
						value={input.note}
						name='note'
						onChange={handleInputChange}
					/>
					<button type='submit' className='formBtn'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Update;
