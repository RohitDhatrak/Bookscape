import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useReducerContext } from "../../Context/ReducerContext";
import { Header } from "../../components/Header/Header";
import { setupAuthHeaderForServiceCalls } from "../../services/setupAuthHeaders";

export function Signup() {
    const [name, setName] = useState();
    const [emailId, setEmailId] = useState();
    const [password, setPassword] = useState();
    const [retypedPassword, setRetypedPassword] = useState();
    const [error, setError] = useState();

    const { dispatch } = useReducerContext();
    const navigate = useNavigate();
    const { state } = useLocation();
    const previousPath = state?.previousPath || "/";

    function validateEmail(e) {
        const emailRegex = /\S+@\S+\.\S+/;
        setEmailId(e.target.value);
        if (!emailRegex.test(e.target.value.toLowerCase())) {
            setError("Enter a valid email address");
        } else {
            setError("");
        }
    }

    function validatePassword(e, isRetyped) {
        var regularExpression =
            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        setError("");

        if (isRetyped) {
            setRetypedPassword(e.target.value);
        } else {
            setPassword(e.target.value);
        }

        if (password !== e.target.value) {
            setError("Passwords do not match");
        }
        if (!regularExpression.test(e.target.value)) {
            setError(
                "The password should be 6-16 characters and should contain atleast 1 number & 1 special character"
            );
        }
    }

    async function signupAndRedirect(e) {
        e.preventDefault();
        try {
            const {
                data: { userId, user, jwt },
            } = await axios.post(
                `${process.env.REACT_APP_API_ENDPOINT}/signup`,
                {
                    newUser: {
                        name,
                        emailId,
                        password,
                    },
                },
                { withCredentials: true }
            );
            if (userId && jwt) {
                dispatch({ type: "SAVE SESSION", payload: { userId, jwt } });
                dispatch({ type: "SET USER", payload: user });
                setupAuthHeaderForServiceCalls(jwt);
                navigate(previousPath, { replace: "true" });
            }
        } catch (error) {
            setError(error.response.data.message);
        }
    }

    return (
        <>
            <Header />
            <div className="login-page">
                <form className="login-form">
                    <div className="login-form-heading">Sign-up</div>
                    <div className="login-form-input">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="login-form-input">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            onChange={validateEmail}
                        />
                    </div>
                    <div className="login-form-input">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            required
                            onChange={(e) => validatePassword(e, false)}
                        />
                    </div>
                    <div className="login-form-input">
                        <label htmlFor="password">Confirm password</label>
                        <input
                            type="password"
                            required
                            id="repassword"
                            onChange={(e) => validatePassword(e, true)}
                        />
                    </div>
                    <div className="login-form-error-message">{error}</div>
                    {name && emailId && password && retypedPassword && !error && (
                        <button
                            className="login-form-button"
                            onClick={signupAndRedirect}
                        >
                            Sign-up
                        </button>
                    )}
                    <div>
                        <span className="sign-up-link-text">
                            Already have an account?
                        </span>
                        <Link
                            to="/login"
                            state={{ previousPath: `${previousPath}` }}
                            className="sign-up-link"
                        >
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}
