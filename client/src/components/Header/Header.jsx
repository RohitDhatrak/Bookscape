import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { HeartSvg, CartSvg } from "../Helpers/Svg";
import { useReducerContext } from "../../Context/ReducerContext";

export function Header() {
    const { dispatch, cart, userId } = useReducerContext();
    const { pathname } = useLocation();
    const navigate = useNavigate();

    function logoutUser() {
        dispatch({ type: "CLEAR SESSION STATE" });
        dispatch({ type: "END SESSION" });
        navigate("/login");
    }

    return (
        <header className="nav">
            <Link to="/" style={{ textDecoration: "none" }}>
                <span className="nav-brand-link">
                    <span>
                        <img className="nav-brand-logo" src={logo} alt="" />
                        <span className="nav-brand-name">Bookscape</span>
                    </span>
                </span>
            </Link>

            <div className="nav-link-section">
                {pathname !== "/wishlist" && (
                    <button
                        className="nav-link nav-btns"
                        onClick={() => navigate("/wishlist")}
                    >
                        {<HeartSvg />}
                    </button>
                )}
                {pathname !== "/cart" && (
                    <div className="cart-logo-container">
                        <button
                            className="nav-link nav-btns"
                            onClick={() => navigate("/cart")}
                        >
                            {<CartSvg />}{" "}
                        </button>
                        {!!cart.length && (
                            <div className="cart-quantity">{cart.length}</div>
                        )}
                    </div>
                )}
                {!userId && (
                    <button
                        className="nav-link session-btn"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>
                )}
                {userId && (
                    <button
                        className="nav-link session-btn logout-btn"
                        onClick={logoutUser}
                    >
                        Logout
                    </button>
                )}
            </div>
        </header>
    );
}
