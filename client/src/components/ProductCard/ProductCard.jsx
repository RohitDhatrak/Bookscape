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
    isWishListed,
    isAddedToCart,
    addToWishList,
    removeFromWishList,
    addToCart,
} from "../../services/productCardCalls";

export function ProductCard({ book }) {
    const { wishList, cart, dispatch, userId } = useReducerContext();
    const { pathname } = useLocation();
    const navigate = useNavigate();

    return (
        <li
            className="card noSelect"
            key={book._id}
            onClick={(e) => {
                e.stopPropagation();
                navigate(`/product/${book._id}`);
            }}
        >
            <img src={book.cover} alt="" className="card-cover" />
            {pathname === "/products" ? (
                <div
                    className="card-icon"
                    onClick={(e) =>
                        addToWishList(e, userId, book, dispatch, navigate)
                    }
                >
                    {isWishListed(wishList, book) ? (
                        <FilledHeartSvg />
                    ) : (
                        <HeartSvg />
                    )}
                </div>
            ) : null}
            {pathname === "/wishlist" ? (
                <div
                    className="card-icon"
                    onClick={(e) =>
                        removeFromWishList(e, userId, book, dispatch)
                    }
                >
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
                <button
                    className="move-to-cart-button"
                    onClick={(e) =>
                        addToCart(
                            e,
                            userId,
                            book,
                            dispatch,
                            navigate,
                            wishList,
                            cart
                        )
                    }
                >
                    Move to Cart
                </button>
            ) : null}
            {pathname === "/products" && !isAddedToCart(cart, book) ? (
                <button
                    className="add-to-cart-button"
                    onClick={(e) =>
                        addToCart(
                            e,
                            userId,
                            book,
                            dispatch,
                            navigate,
                            wishList,
                            cart
                        )
                    }
                >
                    Add to Cart
                </button>
            ) : null}
            {pathname === "/products" && isAddedToCart(cart, book) ? (
                <Link to="/cart" onClick={(e) => e.stopPropagation()}>
                    <button className="go-to-cart-button">
                        Go to Cart <RightArrow />
                    </button>
                </Link>
            ) : null}
        </li>
    );
}
