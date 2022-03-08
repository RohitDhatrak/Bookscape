import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Header } from "../../components/Header/Header";
import { useReducerContext } from "../../Context/ReducerContext";
import { getCartData, getWishListData } from "../../services/networkCalls";
import { setupAuthHeaderForServiceCalls } from "../../services/setupAuthHeaders";

export function Login() {
    const [emailId, setEmailId] = useState(process.env.REACT_APP_GUEST_EMAIL);
    const [password, setPassword] = useState(
        process.env.REACT_APP_GUEST_PASSWORD
    );
    const [asGuest, setAsGuest] = useState(true);
    const [error, setError] = useState();
    const { userId, dispatch } = useReducerContext();
    const navigate = useNavigate();
    const { state } = useLocation();
    const previousPath = state?.previousPath || "/";

    useEffect(() => {
        if (userId) {
            navigate(previousPath, { replace: true });
        }
    }, [userId, navigate, previousPath]);

    function updatePassword(e) {
        setPassword(e.target.value);
        setError("");
        setAsGuest(false);
    }

    function updateEmail(e) {
        setEmailId(e.target.value);
        setError("");
    }

    async function loginAndRedirect(e) {
        e.preventDefault();
        try {
            const {
                data: { userId, user, jwt },
            } = await axios.post(
                `${process.env.REACT_APP_API_ENDPOINT}/login`,
                {
                    emailId,
                    password,
                },
                { withCredentials: true }
            );

            if (userId) {
                dispatch({
                    type: "SAVE SESSION",
                    payload: { userId, jwt },
                });
                setupAuthHeaderForServiceCalls(jwt);
                const [cart, wishList] = await Promise.all([
                    getCartData(userId),
                    getWishListData(userId),
                ]);
                dispatch({
                    type: "LOAD USER DATA",
                    payload: {
                        cart: cart,
                        wishList: wishList,
                    },
                });
                dispatch({ type: "SET USER", payload: user });
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
                    <div className="login-form-heading">Login</div>
                    <div className="login-form-input">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={updateEmail} />
                    </div>
                    <div className="login-form-input">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            required
                            onChange={updatePassword}
                        />
                    </div>
                    <div className="login-form-error-message">{error}</div>
                    {emailId && password && !error && !asGuest && (
                        <button
                            className="login-form-button"
                            onClick={loginAndRedirect}
                        >
                            Login
                        </button>
                    )}
                    {asGuest && <div>OR</div>}
                    {asGuest && (
                        <button
                            className="login-form-button"
                            onClick={loginAndRedirect}
                        >
                            Login as Guest
                        </button>
                    )}
                    <div>
                        <span className="sign-up-link-text">
                            Don't have an account yet?
                        </span>
                        <Link
                            to="/signup"
                            state={{ previousPath: `${previousPath}` }}
                            className="sign-up-link"
                        >
                            Sign-up
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}
