import Todo from "../models/TodoSchema.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ _id: -1 });
    res.status(200).json({
      success: true,
      todos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Problem in fetching Todos",
      error: error.message,
    });
  }
};

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

export const updateTodo = async (req, res) => {
  try {
    const { title, description, completed } = req.body;

    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title, description, completed },
      { new: true } // return the updated document
    );

    if (!updatedTodo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Todo updated successfully",
      todo: updatedTodo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Problem in updating todo",
      error: error.message,
    });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);

    if (!deletedTodo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Todo deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Problem in deleting todo",
      error: error.message,
    });
  }
};
