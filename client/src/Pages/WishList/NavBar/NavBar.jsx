import React from "react";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";
import { useReducerContext } from "../../../Context/ReducerContext";
import { Header } from "../../../components/Header/Header";
import {
    BackArrowSvg,
    CartSvg,
    LogOutSvg,
} from "../../../components/Helpers/Svg";

export function NavBar() {
    const history = createBrowserHistory();
    const { wishList, dispatch, cart } = useReducerContext();

    function logoutUser() {
        dispatch({ type: "CLEAR SESSION STATE" });
        dispatch({ type: "END SESSION" });
    }

    return (
        <>
            <nav className="wishlist-desktop-nav">
                <Header />
            </nav>
            <nav className="wishlist-mobile-nav">
                <span className="wishlist-mobile-nav-heading-container">
                    <span onClick={() => history.back()}>
                        <BackArrowSvg />
                    </span>
                    <span className="wishlist-mobile-nav-header">
                        <span className="wishlist-heading">Wishlist</span>
                        <span className="wishlist-sub-heading">
                            {wishList.length}{" "}
                            {wishList.length === 1 ? "Item" : "Items"}
                        </span>
                    </span>
                </span>
                <div className="wishlist-mobile-nav-btn-container">
                    <Link to="/cart" className="cart-logo-container">
                        <div className="wishlist-mobile-nav-cart nav-btns">
                            <CartSvg />
                        </div>
                        {!!cart.length && (
                            <div className=" cart-quantity mobile-cart-quantity">
                                {cart.length}
                            </div>
                        )}
                    </Link>
                    <span
                        className="wishlist-mobile-nav-cart nav-btns"
                        onClick={logoutUser}
                    >
                        <LogOutSvg />
                    </span>
                </div>
            </nav>
        </>
    );
}
