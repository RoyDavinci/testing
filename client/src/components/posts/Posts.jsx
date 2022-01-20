import React, { useState, useEffect } from "react";
import "./posts.css";
import axios from "axios";
import todoImage from "../../images/pexels-breakingpic-3299.jpg";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";

const Posts = () => {
	const [posts, setPosts] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const postsData = async () => {
			let { data } = await axios.get("http://localhost:8200/api/v1/todo");
			setPosts(data);
		};
		postsData();
	}, []);

	const deletePost = async (id) => {
		let { data } = await axios.delete(
			`http://localhost:8200/api/v1/todo/${id}`
		);
		navigate("/");
	};

	return (
		<div className='postsContainer'>
			<header>
				<Link to='/create' className='todoBtn'>
					Create A New Todo
				</Link>
			</header>
			{posts.map((post) => {
				return (
					<section className='sectionCenter' key={post._id}>
						<img src={todoImage} alt='' />
						<h3>Name: {post.name}</h3>
						<h2>Title: {post.title}</h2>
						<p>Note: {post.note}</p>
						<span>{moment().format("MMM Do YY", post.start_date)}</span>
						<div className='postButtonContainer'>
							<Link className='btnUpdate' to={`/update/${post._id}`}>
								Update
							</Link>
							<button
								className='btnDelete'
								onClick={() => deletePost(post._id)}
							>
								Delete
							</button>
						</div>
					</section>
				);
			})}
		</div>
	);
};

export default Posts;
