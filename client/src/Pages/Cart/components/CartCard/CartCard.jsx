import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useReducerContext } from "../../../../Context/ReducerContext";
import {
    updateWishListData,
    deleteCartData,
} from "../../../../services/networkCalls";

export function CartCard({ book }) {
    const { dispatch, userId, wishList } = useReducerContext();
    const [isMovingToWishList, setIsMovingToWishList] = useState(false);
    const [isRemoving, setIsRemoving] = useState(false);
    const navigate = useNavigate();

    async function removeFromCart(e) {
        e.stopPropagation();
        if (isMovingToWishList || isRemoving) return;
        setIsRemoving(true);
        const response = await deleteCartData(userId, book);
        if (response) {
            dispatch({
                type: "REMOVE FROM CART",
                payload: book,
            });
        }
    }

    async function moveToWishList(e) {
        e.stopPropagation();
        if (isMovingToWishList || isRemoving) return;
        setIsMovingToWishList(true);
        const isWishListed = wishList.find((item) => item._id === book._id);
        if (isWishListed) {
            dispatch({
                type: "REMOVE FROM CART",
                payload: book,
            });
            await deleteCartData(userId, book);
            return;
        }
        const [response, response2] = await Promise.all([
            deleteCartData(userId, book),
            updateWishListData(userId, book),
        ]);
        if (response && response2) {
            dispatch({
                type: "MOVE TO WISHLIST",
                payload: book,
            });
        }
    }

    return (
        <div
            className="cart-card"
            key={book._id}
            onClick={() => navigate(`/product/${book._id}`)}
        >
            <div className="horizontal-card">
                <img src={book.cover} alt="" className="card-cover" />
                <div className="card-text">
                    <Link to={`/product/${book._id}`}>
                        <div className="card-heading">{book.name}</div>
                    </Link>
                    <div className="card-sub-heading">{book.author}</div>
                    <div className="card-seller">Sold by: Bookscape</div>
                    <div className="card-price">
                        <span className="price">₹{book.discountedPrice}</span>
                        <span className="price-original">₹{book.price}</span>
                    </div>
                </div>
            </div>
            <div className="cart-card-footer">
                <button
                    className="cart-card-footer-remove-button"
                    onClick={removeFromCart}
                >
                    {isRemoving ? "Removing..." : "Remove"}
                </button>
                <button
                    className="cart-card-footer-wishlist"
                    onClick={moveToWishList}
                >
                    {isMovingToWishList
                        ? "Moving to wishlist..."
                        : "Move to wishlist"}
                </button>
            </div>
        </div>
    );
}
