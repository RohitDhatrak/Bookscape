import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useReducerContext } from "../../Context/ReducerContext";
import card from "./ProductDetails.module.css";
import { Header } from "../../components/Header/Header";
import {
    BackArrowSvg,
    CartSvg,
    RightArrow,
} from "../../components/Helpers/Svg";
import { createBrowserHistory } from "history";
import {
    isAddedToCart,
    addToCart,
    addToWishList,
    isWishListed,
} from "../../services/productCardCalls";

export function ProductDetails() {
    const { bookId } = useParams();
    const { productsList, cart, wishList, dispatch, userId } =
        useReducerContext();
    const [isReadMoreEnabled, setIsReadMoreEnabled] = useState(false);
    const history = createBrowserHistory();
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    function getBook() {
        return productsList.find((book) => book._id === bookId);
    }
    const book = getBook();
    const [description, setDescription] = useState(getShortenedDescription());

    function getShortenedDescription() {
        return book.description.split(" ").splice(0, 100).join(" ");
    }

    function toggleReadMore() {
        if (isReadMoreEnabled) {
            setIsReadMoreEnabled(false);
            setDescription(getShortenedDescription());
        } else {
            setIsReadMoreEnabled(true);
            setDescription(book.description);
        }
    }

    return (
        <>
            <nav className="wishlist-desktop-nav">
                <Header />
            </nav>
            <nav className="wishlist-mobile-nav">
                <span onClick={() => history.back()}>
                    <BackArrowSvg />
                </span>
                <Link to="/cart" className="cart-logo-container">
                    <span className="wishlist-mobile-nav-cart nav-btns">
                        <CartSvg />
                    </span>
                    {!!cart.length && (
                        <div className="cart-quantity">{cart.length}</div>
                    )}
                </Link>
            </nav>
            <div className={card.container}>
                <img src={book.cover} alt="" className={card.cover} />
                <div className={card.text}>
                    <div className={card.name}>{book.name}</div>
                    <div className={card.author}>by {book.author}</div>

                    <div className={card.price}>
                        <span className={card.newprice}>
                            ₹ {book.discountedPrice}
                        </span>
                        <span className={card.originalprice}>
                            ₹ {book.price}
                        </span>
                    </div>
                    <div className={card.buttons}>
                        {!isAddedToCart(cart, book) ? (
                            <button
                                className={card.primary}
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
                        {isAddedToCart(cart, book) ? (
                            <Link
                                to="/cart"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button className={card.primary}>
                                    Go to Cart <RightArrow />
                                </button>
                            </Link>
                        ) : null}
                        {!isWishListed(wishList, book) ? (
                            <button
                                className={card.secondary}
                                onClick={(e) =>
                                    addToWishList(
                                        e,
                                        userId,
                                        book,
                                        dispatch,
                                        navigate
                                    )
                                }
                            >
                                Add to Wishlist
                            </button>
                        ) : null}
                        {isWishListed(wishList, book) ? (
                            <Link
                                to="/wishlist"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button className={card.secondary}>
                                    Go to Wishlist <RightArrow />
                                </button>
                            </Link>
                        ) : null}
                    </div>

                    <div className={card.description}>
                        {description}
                        <span
                            className={card.readmore}
                            onClick={toggleReadMore}
                        >
                            {(description !== book.description ||
                                isReadMoreEnabled) &&
                                (isReadMoreEnabled
                                    ? " Read less"
                                    : " Read more")}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
