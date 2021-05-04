import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useReducerContext } from "../../Context/ReducerContext";
import { Header } from "../../components/Header/Header";

export function Signup() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const { dispatch } = useReducerContext();
    const navigate = useNavigate();
    const {
        state: { previousPath },
    } = useLocation();

    async function signupAndRedirect() {
        try {
            const {
                data: { userId, message },
            } = await axios.post(
                `${process.env.REACT_APP_API_ENDPOINT}/signup`,
                {
                    username,
                    password,
                }
            );
            dispatch({
                type: "SAVE SESSION",
                payload: userId,
            });
            navigate(previousPath, { replace: "true" });
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <Header />
            <div className="login-page">
                <div className="login-form">
                    <div className="login-form-heading">Sign-up</div>
                    <div className="login-form-input">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="login-form-input">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="login-form-input">
                        <label htmlFor="password">Confirm password</label>
                        <input type="password" id="password" />
                    </div>
                    <button
                        className="login-form-button"
                        onClick={signupAndRedirect}
                    >
                        Sign-up
                    </button>
                    <div>
                        <span className="sign-up-link-text">
                            Already have an account?
                        </span>
                        <Link to="/login" className="sign-up-link">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
