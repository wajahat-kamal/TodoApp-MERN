import Todo from "../model/TodoSchema";

export const getTodo = (req, res) => {
 
}

import Todo from "../models/todoModel.js";

export const createTodo = async (req, res) => {
  try {
    const { title, description, completed } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Please Enter a Title",
      });
    }

    const todo = await Todo.create({ title, description, completed });

    res.status(201).json({
      success: true,
      message: "Todo is created",
      todo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Problem in create Todo",
      error: error.message,
    });
  }
};


export const updateTodo = (req, res) => {

}

export const deleteTodo = (req, res) => {

}