import express from "express";
import {
	createTodo,
	getTodos,
	updateTodos,
	deleteTodo,
} from "../controllers/todo.js";
const router = express.Router();

router.post("/todo", createTodo);
router.get("/todo", getTodos);
router.patch("/todo/:id", updateTodos);
router.delete("/todo/:id", deleteTodo);

export default router;
