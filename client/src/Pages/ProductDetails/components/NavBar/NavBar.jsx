import React from "react";
import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import { BackArrowSvg, CartSvg } from "../../../../components/Helpers/Svg";
import { Header } from "../../../../components/Header/Header";
import { useReducerContext } from "../../../../Context/ReducerContext";

export function NavBar() {
    const history = createBrowserHistory();
    const { cart } = useReducerContext();

    return (
        <>
            <nav className="wishlist-desktop-nav">
                <Header />
            </nav>
            <nav className="wishlist-mobile-nav">
                <span onClick={() => history.back()}>
                    <BackArrowSvg />
                </span>
                <Link to="/cart" className="cart-logo-container">
                    <span className="wishlist-mobile-nav-cart nav-btns">
                        <CartSvg />
                    </span>
                    {!!cart.length && (
                        <div className="cart-quantity">{cart.length}</div>
                    )}
                </Link>
            </nav>
        </>
    );
}
