import React from "react";
import {
    HeartSvg,
    FilledHeartSvg,
    CloseButton,
    RightArrow,
} from "../Helpers/Svg";
import { useReducerContext } from "../../Context/ReducerContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    updateCartData,
    updateWishListData,
    deleteWishListData,
} from "../../services/networkCalls";

export function ProductCard({ book }) {
    const { wishList, cart, dispatch, userId } = useReducerContext();
    const { pathname } = useLocation();
    const navigate = useNavigate();

    function isWishListed() {
        return wishList.some((item) => item._id === book._id);
    }

    function isAddedToCart() {
        return cart.some((item) => item._id === book._id);
    }

    async function addToWishList(e) {
        e.stopPropagation();
        if (userId) {
            const response = await updateWishListData(userId, book);
            if (response) {
                dispatch({
                    type: "ADD TO WISHLIST",
                    payload: book,
                });
            }
        } else {
            navigate("/login", { state: { previousPath: "/products" } });
        }
    }

    async function removeFromWishList(e) {
        e.stopPropagation();
        const response = await deleteWishListData(userId, book);
        if (response) {
            dispatch({
                type: "REMOVE FROM WISHLIST",
                payload: book,
            });
        }
    }

    async function addToCart(e) {
        e.stopPropagation();
        if (isAddedToCart()) {
            await deleteWishListData(userId, book);
            dispatch({
                type: "REMOVE FROM WISHLIST",
                payload: book,
            });
            return;
        }

        if (userId) {
            const response = await updateCartData(userId, {
                ...book,
                quantity: 1,
            });
            const response2 = isWishListed()
                ? await deleteWishListData(userId, book)
                : true;
            if (response && response2) {
                dispatch({
                    type: "ADD TO CART",
                    payload: { ...book, quantity: 1 },
                });
            }
        } else {
            navigate("/login", { state: { previousPath: "/products" } });
        }
    }

    return (
        <li
            className="card"
            key={book._id}
            onClick={(e) => {
                e.stopPropagation();
                navigate(`/product/${book._id}`);
            }}
        >
            <img src={book.cover} alt="" className="card-cover" />
            {pathname === "/products" ? (
                <div className="card-icon" onClick={addToWishList}>
                    {isWishListed() ? <FilledHeartSvg /> : <HeartSvg />}
                </div>
            ) : null}
            {pathname === "/wishlist" ? (
                <div className="card-icon" onClick={removeFromWishList}>
                    <CloseButton />
                </div>
            ) : null}
            <div className="card-text">
                <div className="card-heading">{book.name}</div>
                <div className="card-sub-heading">{book.author}</div>
                <div className="card-price">
                    <span className="price">₹{book.discountedPrice}</span>
                    <span className="price-original">₹{book.price}</span>
                </div>
            </div>
            {pathname === "/wishlist" ? (
                <button className="move-to-cart-button" onClick={addToCart}>
                    Move to Cart
                </button>
            ) : null}
            {pathname === "/products" && !isAddedToCart() ? (
                <button className="add-to-cart-button" onClick={addToCart}>
                    Add to Cart
                </button>
            ) : null}
            {pathname === "/products" && isAddedToCart() ? (
                <Link to="/cart" onClick={(e) => e.stopPropagation()}>
                    <button className="go-to-cart-button">
                        Go to Cart <RightArrow />
                    </button>
                </Link>
            ) : null}
        </li>
    );
}
