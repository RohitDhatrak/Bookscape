import React from "react";
import { useNavigate } from "react-router-dom";
import { useReducerContext } from "../../../../Context/ReducerContext";
import bag from "../../../../assets/bag.png";
import { CartCard } from "../CartCard/CartCard";
import { getCartQuantity, getTotalAmount } from "../../utils";

export function CartProducts() {
    const { cart } = useReducerContext();
    const navigate = useNavigate();

    return (
        <div className="cart-page-body-overview-and-products">
            {cart.length !== 0 ? (
                <div className="cart-overview">
                    <span className="cart-overview-quantity-desktop">
                        My Cart ({getCartQuantity(cart)} Items)
                    </span>
                    <div className="cart-overview-quantity-mobile">
                        {getCartQuantity(cart)} Items
                    </div>
                    <span className="cart-overview-price">
                        Total: ₹{getTotalAmount(cart)}
                    </span>
                </div>
            ) : (
                <div className="cart-is-empty-page">
                    <img src={bag} alt="bag" className="bag-image" />
                    <div className="cart-is-empty-page-text">Cart is empty</div>
                    <button
                        className="cart-is-empty-page-button"
                        onClick={() => navigate("/wishlist")}
                    >
                        Add items from wishlist
                    </button>
                </div>
            )}
            <div className="cart-page-products">
                {cart.map((item) => (
                    <CartCard book={item} key={item._id} />
                ))}
            </div>
        </div>
    );
}
