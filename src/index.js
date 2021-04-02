import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App.jsx";
import { RouteContextProvider } from "./Context/RouteContext";

ReactDOM.render(
    <React.StrictMode>
        <RouteContextProvider>
            <App />
        </RouteContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
