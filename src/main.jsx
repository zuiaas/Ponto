import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/styles.css";
import Home from "./pages/home.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Home/>
    </StrictMode>
);