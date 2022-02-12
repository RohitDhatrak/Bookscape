import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useReducerContext } from "../../Context/ReducerContext";
import card from "./ProductDetails.module.css";
import { NavBar } from "./components/NavBar/NavBar";
import { CardButtons } from "./components/CardButtons/CardButtons";

export function ProductDetails() {
    const { bookId } = useParams();
    const { productsList } = useReducerContext();
    const [isReadMoreEnabled, setIsReadMoreEnabled] = useState(false);
    const book = getBook();
    const [description, setDescription] = useState(getShortenedDescription());

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    function getBook() {
        return productsList.find((book) => book._id === bookId);
    }

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
            <NavBar />
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

                    <CardButtons />

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
