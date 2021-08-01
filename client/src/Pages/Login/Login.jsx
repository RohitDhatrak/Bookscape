import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { useReducerContext } from "../../Context/ReducerContext";
import { getCartData, getWishListData } from "../../utils/networkCalls";

export function Login() {
    const [emailId, setEmailId] = useState();
    const [password, setPassword] = useState();
    const { isUserLoggedIn, dispatch } = useReducerContext();
    const navigate = useNavigate();
    const {
        state: { previousPath },
    } = useLocation();

    useEffect(() => {
        if (isUserLoggedIn) {
            navigate(previousPath, { replace: true });
        }
    }, [isUserLoggedIn, navigate, previousPath]);

    async function loginAndRedirect() {
        try {
            const {
                data: { userId, message },
            } = await axios.post(
                `${process.env.REACT_APP_API_ENDPOINT}/login`,
                {
                    emailId,
                    password,
                }
            );
            dispatch({
                type: "SAVE SESSION",
                payload: userId,
            });
            const cart = await getCartData(userId);
            const wishList = await getWishListData(userId);
            dispatch({
                type: "LOAD USER DATA",
                payload: {
                    cart: cart,
                    wishList: wishList,
                },
            });
            navigate(previousPath, { replace: "true" });
        } catch (error) {
            console.log({ error });
        }
    }

    return (
        <div>
            <Header />
            <div className="login-page">
                <div className="login-form">
                    <div className="login-form-heading">Login</div>
                    <div className="login-form-input">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            onChange={(e) => setEmailId(e.target.value)}
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
                    <button
                        className="login-form-button"
                        onClick={loginAndRedirect}
                    >
                        Login
                    </button>
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
                </div>
            </div>
        </div>
    );
}
