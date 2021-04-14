import React from "react";
import { HeartSvg, FilledHeartSvg, CloseButton } from "../Helpers/Svg";
import { useReducerContext } from "../../Context/ReducerContext";
import { Link, useLocation } from "react-router-dom";

export function ProductCard({ book }) {
    const { wishList, cart, dispatch } = useReducerContext();
    const { pathname } = useLocation();

    function isWishListed() {
        return wishList.some((item) => item.id === book.id);
    }

    function isAddedToCart() {
        return cart.some((item) => item.id === book.id);
    }

    function addToWishList(e) {
        dispatch({
            type: "ADD TO WISHLIST",
            payload: book,
        });
        e.preventDefault();
    }

    function removeFromWishList(e) {
        dispatch({
            type: "REMOVE FROM WISHLIST",
            payload: book,
        });
        e.preventDefault();
    }

    function addToCart(e) {
        dispatch({
            type: "ADD TO CART",
            payload: book,
        });
        e.preventDefault();
    }

    return (
        <Link to={`/product/${book.id}`} style={{ textDecoration: "none" }}>
            <li className="card" key={book.id}>
                <img src={book.image} alt="" className="card-cover" />
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
                        <span className="price">₹{book.priceDiscounted}</span>
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
                    <Link to="/cart">
                        <button className="go-to-cart-button">
                            Go to Cart
                        </button>
                    </Link>
                ) : null}
            </li>
        </Link>
    );
}
