import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import bookbanner from "../../assets/book-banner.jpg";
import { HorizontalScrollList } from "../../components/HorizontalScrollList/HorizontalScrollList";
import { useReducerContext } from "../../Context/ReducerContext";

export function Home() {
    const { productsList, dispatch } = useReducerContext();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch({ type: "CLEAR FILTER" });
    }, []);

    function getBestSellingBooks() {
        return productsList
            .sort(
                (product1, product2) =>
                    product2.salesCount - product1.salesCount
            )
            .slice(0, 8);
    }

    function getNewBooks() {
        return productsList
            .sort(
                (product1, product2) => product2.dateAdded - product1.dateAdded
            )
            .slice(0, 8);
    }

    return (
        <div className="home-page">
            <Header />
            <div className="home-page-banner-container">
                <img src={bookbanner} alt="" className="home-page-banner" />
                <div className="text-overlay-container">
                    <div className="text-overlay-text">
                        Books are a uniquely portable magic. ~ Stephen King
                    </div>
                    <button
                        className="text-overlay-button"
                        onClick={() => navigate("/products")}
                    >
                        Shop now
                    </button>
                </div>
            </div>
            <HorizontalScrollList
                products={getBestSellingBooks()}
                listHeading={"Best Selling"}
            />
            <HorizontalScrollList
                products={getNewBooks()}
                listHeading={"New Releases"}
            />
        </div>
    );
}
