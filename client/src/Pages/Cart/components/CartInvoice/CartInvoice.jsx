import React from "react";
import {
    getCartQuantity,
    getTotalAmount,
    getTotalAmountBeforeDiscount,
} from "../../utils";
import { useReducerContext } from "../../../../Context/ReducerContext";

export function CartInvoice() {
    const { cart } = useReducerContext();

    return (
        <>
            {cart.length !== 0 ? (
                <div className="cart-page-price-details">
                    <div className="price-details-heading">
                        <span>Price Details</span> ({getCartQuantity(cart)}{" "}
                        Items)
                    </div>
                    <div className="price-details-body">
                        <div className="price-details-body-item">
                            <span>Total MRP</span>
                            <span>₹{getTotalAmountBeforeDiscount(cart)}</span>
                        </div>
                        <div className="price-details-body-item">
                            <span>Discount on MRP</span>
                            <span className="discount-highlight">
                                -₹
                                {getTotalAmountBeforeDiscount(cart) -
                                    getTotalAmount(cart)}
                            </span>
                        </div>
                        <div className="price-details-body-item">
                            <span>Delivery Fee</span>
                            <span className="discount-highlight">Free</span>
                        </div>
                    </div>
                    <div className="price-details-total">
                        <span>Total Amount</span>
                        <span>₹{getTotalAmount(cart)}</span>
                    </div>
                    <button className="price-details-order-button">
                        Place Order
                    </button>
                </div>
            ) : null}
        </>
    );
}
