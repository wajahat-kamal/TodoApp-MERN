import { Pen, Trash2 } from "lucide-react";
import React from "react";

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
}

function TodoItem({ todo }: TodoItemProps) {
  return (
    <div className="w-full flex items-center justify-between gap-4 border border-white/30 rounded-2xl p-4 mb-4 backdrop-blur-sm bg-white/5">
      <div className="text-left">
        <h2 className="text-lg font-semibold">{todo.title}</h2>
        <p className="text-sm text-gray-300">{todo.description}</p>
      </div>

     <Trash2/>
     <Pen/>
    </div>
  );
}

export default TodoItem;
