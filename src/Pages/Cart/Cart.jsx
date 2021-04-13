import React from "react";
import { CartCard } from "./CartCard/CartCard";
import { CheckOutHeader } from "../../components/CheckOutHeader/CheckOutHeader";
import { useReducerContext } from "../../Context/ReducerContext";
import { useRouteContext } from "../../Context/RouteContext";
import bag from "../../assets/bag.png";
import { Link } from "react-router-dom";

export function Cart() {
    const { cart } = useReducerContext();
    const { route, setRoute, lastRoute, setLastRoute } = useRouteContext();

    function getCartQuantity() {
        return cart.reduce(
            (totalItems, item) => totalItems + 1 * item.quantity,
            0
        );
    }

    function getTotalAmount() {
        return cart.reduce(
            (totalPrice, item) =>
                totalPrice + item.quantity * item.priceDiscounted,
            0
        );
    }

    function goToWishList() {
        setLastRoute([...lastRoute, route]);
        setRoute("wishlist");
    }

    return (
        <div className="cart-page">
            <CheckOutHeader heading={"Cart"} step={"Step 1/3"} />
            {cart.length !== 0 ? (
                <div className="cart-overview">
                    <span className="cart-overview-quantity">
                        {getCartQuantity()} Items
                    </span>
                    <span className="cart-overview-price">
                        Total: ₹{getTotalAmount()}
                    </span>
                </div>
            ) : (
                <div className="cart-is-empty-page">
                    <img src={bag} alt="bag" className="bag-image" />
                    <div className="cart-is-empty-page-text">Cart is empty</div>
                    <Link to="/wishlist">
                        <button
                            className="cart-is-empty-page-button"
                            onClick={goToWishList}
                        >
                            Add items from wishlist
                        </button>
                    </Link>
                </div>
            )}
            {cart.map((item) => (
                <CartCard book={item} />
            ))}
        </div>
    );
}
