import TodoUser from "../models/todo.js";

const createTodo = async (req, res) => {
	const { name, title, start_date, creator, note } = req.body;
	try {
		const todos = new TodoUser({ name, title, start_date, creator, note });
		await todos.save((err) => {
			if (err) {
				console.log(err);
				res.status(500).json(err);
			} else {
				res.status(200).json({ message: "todo created", todos });
			}
		});
	} catch (error) {
		res
			.status(500)
			.json({ message: "error on controller", error: error.message });
	}
};

const getTodos = async (req, res) => {
	try {
		const allTodos = await TodoUser.find({});
		res.status(200).json(allTodos);
	} catch (error) {
		res
			.status(500)
			.json({ message: "error on controller", error: error.message });
	}
};

const updateTodos = async (req, res) => {
	const { id } = req.params;

	try {
		const updateTodos = await TodoUser.findOneAndUpdate(
			{ _id: id },
			{ $set: { title: req.body.title, name: req.body.title } },
			{ new: true }
		);
		res.status(200).json(updateTodos);
	} catch (error) {
		res
			.status(500)
			.json({ message: "error on controller", error: error.message });
	}
};

const deleteTodo = async (req, res) => {
	const { id } = req.params;
	try {
		const deletedTodo = await TodoUser.findOneAndDelete(
			{ _id: id },
			{ new: true }
		);
		res.status(200).json(deletedTodo);
	} catch (error) {
		res
			.status(500)
			.json({ message: "error on controller", error: error.message });
	}
};

export { createTodo, getTodos, updateTodos, deleteTodo };
