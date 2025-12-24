import { Plus } from "lucide-react";
import React from "react";
import TodoItem from "./TodoItem";

export default function App() {

  const fetchTodos = async () => {
    
  }

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-image.jpeg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
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

          <button className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition flex items-center justify-center">
            <Plus size={22} />
          </button>
        </header>

        {/* Main */}
        <main className="flex-1 px-4 md:px-16 py-6 overflow-y-auto">
          
          {/* Todo Item */}
          <TodoItem/>

        </main>

        {/* Footer */}
        <footer className="text-center py-3 text-xs text-gray-400">
          © 2025 TodoApp — Stay focused. Get things done.
        </footer>
      </div>
    </div>
  );
}




{/* Hero Section */}
        {/* <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Organize Your Daily Tasks
          </h2>
          <p className="text-gray-300 max-w-xl mb-8">
            A clean, minimal and powerful todo app to help you stay productive
            and focused every day.
          </p>

          <div className="w-full max-w-xl flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="What do you want to accomplish today?"
              className="flex-1 px-5 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 transition font-semibold">
              Add Todo
            </button>
          </div>
        </main> */}