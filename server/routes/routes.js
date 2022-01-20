import express from "express";
import {
	createTodo,
	getTodos,
	updateTodos,
	deleteTodo,
	getSingleTodo,
} from "../controllers/todo.js";
const router = express.Router();

router.post("/todo", createTodo);
router.get("/todo", getTodos);
router.patch("/todo/:id", updateTodos);
router.delete("/todo/:id", deleteTodo);
router.get("/todo/:id", getSingleTodo);

export default router;
