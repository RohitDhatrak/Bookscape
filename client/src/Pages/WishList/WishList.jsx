import React from "react";
import { Header } from "../../components/Header/Header";
import { useReducerContext } from "../../Context/ReducerContext";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { BackArrowSvg, CartSvg, LogOutSvg } from "../../components/Helpers/Svg";
import wishlist from "../../assets/wishlist.png";
import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";

export function WishList() {
    const { wishList, dispatch } = useReducerContext();
    const history = createBrowserHistory();

    function logoutUser() {
        dispatch({ type: "CLEAR SESSION STATE" });
        dispatch({ type: "END SESSION" });
    }

    return (
        <div>
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
                    <Link to="/cart">
                        <span className="wishlist-mobile-nav-cart nav-btns">
                            <CartSvg />
                        </span>
                    </Link>
                    <span
                        className="wishlist-mobile-nav-cart nav-btns"
                        onClick={logoutUser}
                    >
                        <LogOutSvg />
                    </span>
                </div>
            </nav>
            <div className="wish-list-count">
                My Wishlist
                <span>{wishList.length} Items</span>
            </div>
            <div className="wish-list-display">
                {wishList.map((book) => (
                    <ProductCard book={book} key={book._id} />
                ))}
            </div>
            {wishList.length === 0 ? (
                <div className="wishlist-is-empty-page">
                    <img src={wishlist} alt="" className="wishlist-image" />
                    <div className="wishlist-is-empty-page-text">
                        Wishlist is empty
                    </div>
                    <Link to="/">
                        <button className="wishlist-is-empty-page-button">
                            Continue shopping
                        </button>
                    </Link>
                </div>
            ) : null}
        </div>
    );
}
