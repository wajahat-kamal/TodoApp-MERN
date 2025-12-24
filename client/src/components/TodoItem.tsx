import axios from "axios";
import { Pen, Trash2 } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";

interface Todo {
  _id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt?: string;
  updatedAt?: string;
}

interface TodoItemProps {
  todo: Todo;
  // onDelete?: (_id: string) => void; // optional callback to update parent
}

function TodoItem({ todo }: TodoItemProps) {
  const API_URL = import.meta.env.VITE_API_URL;

  const deleteTodo = async () => {
    try {
      const { data } = await axios.post(`${API_URL}/delete`, { id: todo._id });
      if (data.success) {
        toast.success(data.message);
        // if (onDelete) onDelete(todo._id);
      }
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || error.message || "Something went wrong"
      );
    }
  };

  return (
    <div
      className="group w-full flex items-center justify-between gap-4 
                 border border-white/30 rounded-2xl p-4 mb-4 
                 backdrop-blur-sm bg-white/5 
                 hover:bg-white/10 transition"
    >
      {/* Text */}
      <div className="flex-1 text-left">
        <h2 className="text-lg font-semibold ">{todo.title}</h2>

        {todo.description && (
          <p className="text-sm text-gray-300 mt-1 line-clamp-2">
            {todo.description}
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center md:gap-3 gap-0 opacity-70 group-hover:opacity-100 transition">
        <button
          className="p-2 rounded-full hover:bg-white/10 transition"
          aria-label="Edit todo"
        >
          <Pen size={18} />
        </button>

        <button
          onClick={deleteTodo}
          className="p-2 rounded-full hover:bg-red-500/20 text-red-400 transition"
          aria-label="Delete todo"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
