import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useReducerContext } from "../../Context/ReducerContext";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import wishlist from "../../assets/wishlist.png";
import { NavBar } from "./NavBar/NavBar";

export function WishList() {
    const { wishList, dispatch } = useReducerContext();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch({ type: "CLEAR FILTER" });
    }, []);

    return (
        <>
            <NavBar />
            <div className="wish-list-count">
                My Wishlist
                <span>{wishList.length} Items</span>
            </div>

            <div className="wish-list-display">
                {wishList.map((book) => (
                    <ProductCard book={book} key={book._id} />
                ))}
            </div>

            {wishList.length === 0 ? (
                <div className="wishlist-is-empty-page">
                    <img src={wishlist} alt="" className="wishlist-image" />
                    <div className="wishlist-is-empty-page-text">
                        Wishlist is empty
                    </div>
                    <button
                        className="wishlist-is-empty-page-button"
                        onClick={() => navigate("/products")}
                    >
                        Continue shopping
                    </button>
                </div>
            ) : null}
        </>
    );
}
