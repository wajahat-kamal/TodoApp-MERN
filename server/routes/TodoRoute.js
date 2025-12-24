import express from "express";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/TodoController.js";

const router = express.Router();

// GET all todos
router.get("/", getTodos);

// POST new todo
router.post("/", createTodo);

// PUT toggle completed
router.put("/:id", updateTodo);

// DELETE todo
router.post("/delete", deleteTodo);

export default router;
