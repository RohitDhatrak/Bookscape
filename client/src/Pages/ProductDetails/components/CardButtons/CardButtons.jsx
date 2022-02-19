import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    isAddedToCart,
    addToCart,
    addToWishList,
    isWishListed,
} from "../../../../services/productCardCalls";
import { useReducerContext } from "../../../../Context/ReducerContext";
import { RightArrow } from "../../../../components/Helpers/Svg";
import card from "../../ProductDetails.module.css";

export function CardButtons() {
    const { bookId } = useParams();
    const { productsList, cart, wishList, dispatch, userId } =
        useReducerContext();
    const navigate = useNavigate();
    const [isAddingToCart, setIsAddingToCart] = useState(false);
    const [isAddingToWishList, setIsAddingToWishList] = useState(false);

    function getBook() {
        return productsList.find((book) => book._id === bookId);
    }
    const book = getBook();

    return (
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
                            cart,
                            isAddingToCart,
                            setIsAddingToCart
                        )
                    }
                >
                    {isAddingToCart ? "Adding to Cart..." : "Add to Cart"}
                </button>
            ) : null}
            {isAddedToCart(cart, book) ? (
                <button
                    className={card.primary}
                    onClick={() => navigate("/cart")}
                >
                    Go to Cart <RightArrow />
                </button>
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
                            navigate,
                            isAddingToWishList,
                            setIsAddingToWishList
                        )
                    }
                >
                    {isAddingToWishList ? "Adding..." : "Add to Wishlist"}
                </button>
            ) : null}
            {isWishListed(wishList, book) ? (
                <button
                    className={card.secondary}
                    onClick={() => navigate("/wishlist")}
                >
                    Go to Wishlist <RightArrow />
                </button>
            ) : null}
        </div>
    );
}
