import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Suppress specific console warnings and errors
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

console.error = (...args) => {
  if (args[0].includes("BufferGeometry.toNonIndexed")) {
    return;
  }
  if (args[0].includes("PropertyBinding: Trying to update node")) {
    return;
  }
  originalConsoleError.apply(console, args);
};

console.warn = (...args) => {
  if (args[0].includes("BufferGeometry.toNonIndexed")) {
    return;
  }
  originalConsoleWarn.apply(console, args);
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <App />
    </>
  </React.StrictMode>
);
