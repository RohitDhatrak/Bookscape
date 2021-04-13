import React from "react";
import { Header } from "../../components/Header/Header";
import { Link } from "react-router-dom";

export function Login() {
    return (
        <div>
            <Header />
            <div className="login-page">
                <div className="login-form">
                    <div className="login-form-heading">Login</div>
                    <div className="login-form-input">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" />
                    </div>
                    <div className="login-form-input">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <button className="login-form-button">Login</button>
                    <div>
                        <span className="sign-up-link-text">
                            Don't have an account yet?
                        </span>
                        <Link to="/signup" className="sign-up-link">
                            Sign-up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
