import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  completed: { type: Boolean, default: false },
}, { timestamps: true }); // optional: adds createdAt & updatedAt

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
