import React from "react";
import { useReducerContext } from "../../../Context/ReducerContext";
import {
    updateWishListData,
    deleteCartData,
} from "../../../utils/networkCalls";

export function CartCard({ book }) {
    const { dispatch, userId } = useReducerContext();

    async function removeFromCart() {
        const response = await deleteCartData(userId, book);
        if (response) {
            dispatch({
                type: "REMOVE FROM CART",
                payload: book,
            });
        }
    }

    async function moveToWishList() {
        const response = await deleteCartData(userId, book);
        const response2 = await updateWishListData(userId, book);
        if (response && response2) {
            dispatch({
                type: "MOVE TO WISHLIST",
                payload: book,
            });
        }
    }

    return (
        <div className="cart-card" key={book.id}>
            <div className="horizontal-card">
                <img src={book.image} alt="" className="card-cover" />
                <div className="card-text">
                    <div className="card-heading">{book.name}</div>
                    <div className="card-sub-heading">{book.author}</div>
                    <div className="card-seller">Sold by: Bookscape</div>
                    <div className="card-price">
                        <span className="price">₹{book.priceDiscounted}</span>
                        <span className="price-original">₹{book.price}</span>
                    </div>
                </div>
            </div>
            <div className="cart-card-footer">
                <span
                    className="cart-card-footer-remove-button"
                    onClick={removeFromCart}
                >
                    Remove
                </span>
                <span
                    className="cart-card-footer-wishlist"
                    onClick={moveToWishList}
                >
                    Move to wishlist
                </span>
            </div>
        </div>
    );
}