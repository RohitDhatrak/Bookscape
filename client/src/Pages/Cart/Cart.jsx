import React from "react";
import { CartCard } from "./CartCard/CartCard";
import { Header } from "../../components/Header/Header";
import { useReducerContext } from "../../Context/ReducerContext";
import bag from "../../assets/bag.png";
import { Link } from "react-router-dom";

export function Cart() {
    const { cart } = useReducerContext();

    function getCartQuantity() {
        return cart.reduce((totalItems, item) => totalItems + 1, 0);
    }

    function getTotalAmount() {
        return cart.reduce(
            (totalPrice, item) => totalPrice + item.discountedPrice,
            0
        );
    }

    function getTotalAmountBeforeDiscount() {
        return cart.reduce((totalPrice, item) => totalPrice + item.price, 0);
    }

    return (
        <div className="cart-page">
            <Header />
            <div className="cart-page-body">
                <div className="cart-page-body-overview-and-products">
                    {cart.length !== 0 ? (
                        <div className="cart-overview">
                            <span className="cart-overview-quantity-desktop">
                                My Cart ({getCartQuantity()} Items)
                            </span>
                            <div className="cart-overview-quantity-mobile">
                                {getCartQuantity()} Items
                            </div>
                            <span className="cart-overview-price">
                                Total: ₹{getTotalAmount()}
                            </span>
                        </div>
                    ) : (
                        <div className="cart-is-empty-page">
                            <img src={bag} alt="bag" className="bag-image" />
                            <div className="cart-is-empty-page-text">
                                Cart is empty
                            </div>
                            <Link to="/wishlist">
                                <button className="cart-is-empty-page-button">
                                    Add items from wishlist
                                </button>
                            </Link>
                        </div>
                    )}
                    <div className="cart-page-products">
                        {cart.map((item) => (
                            <CartCard book={item} key={item._id} />
                        ))}
                    </div>
                </div>
                {cart.length !== 0 ? (
                    <div className="cart-page-price-details">
                        <div className="price-details-heading">
                            <span>Price Details</span> ({getCartQuantity()}{" "}
                            Items)
                        </div>
                        <div className="price-details-body">
                            <div className="price-details-body-item">
                                <span>Total MRP</span>
                                <span>₹{getTotalAmountBeforeDiscount()}</span>
                            </div>
                            <div className="price-details-body-item">
                                <span>Discount on MRP</span>
                                <span className="discount-highlight">
                                    -₹
                                    {getTotalAmountBeforeDiscount() -
                                        getTotalAmount()}
                                </span>
                            </div>
                            <div className="price-details-body-item">
                                <span>Delivery Fee</span>
                                <span className="discount-highlight">Free</span>
                            </div>
                        </div>
                        <div className="price-details-total">
                            <span>Total Amount</span>
                            <span>₹{getTotalAmount()}</span>
                        </div>
                        <button className="price-details-order-button">
                            Place Order
                        </button>
                    </div>
                ) : null}
            </div>
        </div>
    );
}
