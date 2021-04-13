import React from "react";
import { Header } from "../../components/Header/Header";
import { Link } from "react-router-dom";

export function Signup() {
    return (
        <div>
            <Header />
            <div className="login-page">
                <div className="login-form">
                    <div className="login-form-heading">Sign-up</div>
                    <div className="login-form-input">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" />
                    </div>
                    <div className="login-form-input">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="login-form-input">
                        <label htmlFor="password">Confirm password</label>
                        <input type="password" id="password" />
                    </div>
                    <button className="login-form-button">Sign-up</button>
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
