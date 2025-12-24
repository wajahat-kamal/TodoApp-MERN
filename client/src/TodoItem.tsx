import React from "react";

function TodoItem() {
  return (
    <div className="w-full flex items-center justify-between gap-4 border border-white/30 rounded-2xl p-4 mb-4 backdrop-blur-sm bg-white/5">
      <div className="text-left">
        <h2 className="text-lg font-semibold">Cook for dinner</h2>
        <p className="text-sm text-gray-300">
          Prepare a healthy meal in the evening
        </p>
      </div>

      <input
        type="checkbox"
        className="w-5 h-5 accent-blue-600 cursor-pointer"
      />
    </div>
  );
}

export default TodoItem;
