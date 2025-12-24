import React from "react";
import { Toaster } from "react-hot-toast";
import Home from "./page/Home";

function App() {
  return (
    <div className="relative min-h-screen">
      <Home />

      {/* Toast notifications */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />
    </div>
  );
}

export default App;
