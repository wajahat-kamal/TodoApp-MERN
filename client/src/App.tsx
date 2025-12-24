import { Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import axios from "axios";

export default function App() {
  const [todos, setTodos] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;

  const fetchTodos = async () => {
    try {
      const { data } = await axios.get(API_URL);

      if (data.success) {
        setTodos(data.todos);
      }
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-image.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex flex-col min-h-screen text-white">
        
        {/* Navbar */}
        <header className="flex items-center justify-between px-5 md:px-16 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">
              ✓
            </div>
            <h1 className="text-2xl font-bold">
              Todo<span className="text-blue-400">App</span>
            </h1>
          </div>

          <button className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition">
            <Plus size={22} />
          </button>
        </header>

        {/* Main */}
        <main className="flex-1 px-4 md:px-16 py-6 overflow-y-auto">
          {todos.map((todo) => (
            <TodoItem todo={todo} />
          ))}
        </main>

        {/* Footer */}
        <footer className="text-center py-3 text-xs text-gray-400">
          © 2025 TodoApp — Stay focused. Get things done.
        </footer>
      </div>
    </div>
  );
}
