import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
	name: String,
	title: String,
	start_date: { type: Date, default: Date.now },
	_creator: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
	note: String,
});

const TodoUser = mongoose.model("TodoSchema", todoSchema);

export default TodoUser;
