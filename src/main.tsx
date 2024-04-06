import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import RequestDataProvider from "./context/RequestDataProvider.tsx";
import "./index.css";
import ResponseDataProvider from "./context/ResponseDataProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RequestDataProvider>
      <ResponseDataProvider>
        <App />
      </ResponseDataProvider>
    </RequestDataProvider>
  </React.StrictMode>
);
