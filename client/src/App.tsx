import React from "react";

export default function App() {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/bg-image.jpeg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen text-white">
        
        {/* Navbar */}
        <header className="flex items-center justify-between px-6 md:px-16 py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">
              ✓
            </div>
            <h1 className="text-2xl font-bold">
              Todo<span className="text-blue-400">App</span>
            </h1>
          </div>

          <button className="hidden sm:block px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition font-medium">
            Add Task
          </button>
        </header>

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

        {/* Footer */}
        {/* <footer className="text-center py-4 text-sm text-gray-400">
          © 2025 TodoApp — Stay focused. Get things done.
        </footer> */}
      </div>
    </div>
  );
}
