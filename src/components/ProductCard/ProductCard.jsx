import React from "react";
import { HeartSvg, FilledHeartSvg, CloseButton } from "../Helpers/Svg";
import { useReducerContext } from "../../Context/ReducerContext";
import { useRouteContext } from "../../Context/RouteContext";

export function ProductCard({ book }) {
    const { wishList, cart, dispatch } = useReducerContext();
    const { route, setRoute, lastRoute, setLastRoute } = useRouteContext();

    function isWishListed() {
        return wishList.find((item) => item.id === book.id);
    }

    function isAddedToCart() {
        return cart.find((item) => item.id === book.id);
    }

    function addToWishList() {
        dispatch({
            type: "ADD TO WISHLIST",
            payload: book,
        });
    }

    function removeFromWishList() {
        dispatch({
            type: "REMOVE FROM WISHLIST",
            payload: book,
        });
    }

    function addToCart() {
        dispatch({
            type: "ADD TO CART",
            payload: book,
        });
    }

    function goToCart() {
        setLastRoute([...lastRoute, route]);
        setRoute("cart");
    }

    return (
        <li className="card" key={book.id}>
            <img src={book.image} alt="" className="card-cover" />
            {route === "products" ? (
                <div className="card-icon" onClick={addToWishList}>
                    {isWishListed() ? <FilledHeartSvg /> : <HeartSvg />}
                </div>
            ) : null}

            {route === "wishlist" ? (
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

            {route === "wishlist" ? (
                <button className="move-to-cart-button" onClick={addToCart}>
                    Move to Cart
                </button>
            ) : null}

            {route === "products" && !isAddedToCart() ? (
                <button className="move-to-cart-button" onClick={addToCart}>
                    Add to Cart
                </button>
            ) : null}

            {route === "products" && isAddedToCart() ? (
                <button className="move-to-cart-button" onClick={goToCart}>
                    Go to Cart
                </button>
            ) : null}
        </li>
    );
}
