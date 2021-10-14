import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useReducerContext } from "../../Context/ReducerContext";
import card from "./ProductDetails.module.css";
import { Header } from "../../components/Header/Header";
import { BackArrowSvg, CartSvg } from "../../components/Helpers/Svg";
import { createBrowserHistory } from "history";

export function ProductDetails() {
    const { bookId } = useParams();
    const { productsList } = useReducerContext();
    const [isReadMoreEnabled, setIsReadMoreEnabled] = useState(false);
    const history = createBrowserHistory();

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
                <span className="wishlist-mobile-nav-header"></span>
                <Link to="/cart">
                    <span className="wishlist-mobile-nav-cart nav-btns">
                        <CartSvg />
                    </span>
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
                        <button className={card.primary}>Add to Cart</button>
                        <button className={card.secondary}>
                            Add to Wishlist
                        </button>
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
