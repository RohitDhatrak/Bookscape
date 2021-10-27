import React from "react";
import logo from "../../assets/logo.png";
import { HeartSvg, CartSvg, LogOutSvg } from "../Helpers/Svg";
import { Link, useLocation } from "react-router-dom";
import { useReducerContext } from "../../Context/ReducerContext";

export function Header() {
    const { dispatch, cart } = useReducerContext();
    const { pathname } = useLocation();

    function logoutUser() {
        dispatch({ type: "CLEAR SESSION STATE" });
        dispatch({ type: "END SESSION" });
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
                <div
                    className="nav-link nav-btns profile-button"
                    onClick={logoutUser}
                >
                    <LogOutSvg />
                </div>
            </div>
        </header>
    );
}
