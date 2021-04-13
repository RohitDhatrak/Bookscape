import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App.jsx";
import { RouteContextProvider } from "./Context/RouteContext";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <RouteContextProvider>
                <App />
            </RouteContextProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
