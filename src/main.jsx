import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { IsLoadingProvider } from "./context/IsLoadingContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <IsLoadingProvider>
          <App />
        </IsLoadingProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
