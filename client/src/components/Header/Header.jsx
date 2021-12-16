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
                <Link to="/wishlist">
                    <div className="nav-link nav-btns">{<HeartSvg />}</div>
                </Link>
                {pathname !== "/cart" && (
                    <Link to="/cart" className="cart-logo-container">
                        <div className="nav-link nav-btns">{<CartSvg />} </div>
                        {!!cart.length && (
                            <div className="cart-quantity">{cart.length}</div>
                        )}
                    </Link>
                )}
                {!userId && (
                    <div
                        className="nav-link session-btn"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </div>
                )}
                {userId && (
                    <div
                        className="nav-link session-btn logout-btn"
                        onClick={logoutUser}
                    >
                        Logout
                    </div>
                )}
            </div>
        </header>
    );
}
