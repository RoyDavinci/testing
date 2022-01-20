import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
	name: String,
	title: String,
	start_date: { type: Date, default: Date.now },
	creator: String,
	note: String,
});

const TodoUser = mongoose.model("TodoSchema", todoSchema);

export default TodoUser;
