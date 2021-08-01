import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App.jsx";
import { ReducerContextProvider } from "./Context/ReducerContext";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ReducerContextProvider>
                <App />
            </ReducerContextProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
