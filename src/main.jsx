import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ErrorBoundary } from "react-error-boundary";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={App}
      onReset={() => window.location.replace("http://localhost:5173/")}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
