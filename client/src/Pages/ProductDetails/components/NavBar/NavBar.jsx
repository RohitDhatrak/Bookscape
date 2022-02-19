import React from "react";
import { useNavigate } from "react-router-dom";
import { createBrowserHistory } from "history";
import { BackArrowSvg, CartSvg } from "../../../../components/Helpers/Svg";
import { Header } from "../../../../components/Header/Header";
import { useReducerContext } from "../../../../Context/ReducerContext";

export function NavBar() {
    const history = createBrowserHistory();
    const { cart } = useReducerContext();
    const navigate = useNavigate();

    return (
        <>
            <nav className="wishlist-desktop-nav">
                <Header />
            </nav>
            <nav className="wishlist-mobile-nav">
                <span onClick={() => history.back()}>
                    <BackArrowSvg />
                </span>
                <div className="cart-logo-container">
                    <button
                        className="wishlist-mobile-nav-cart nav-btns"
                        onClick={() => navigate("/cart")}
                    >
                        <CartSvg />
                    </button>
                    {!!cart.length && (
                        <div className="cart-quantity">{cart.length}</div>
                    )}
                </div>
            </nav>
        </>
    );
}
