import React from "react";
import { productData } from "../../faker";
import { HeartSvg, SortSvg, FilterSvg } from "../Helpers/Svg";
import { SortPage } from "./MobileFooter/SortPage";
import { FilterPage } from "./MobileFooter/FilterPage";
import { useProductsContext } from "../../Context/ProductsContext";

export function Products() {
    const {
        showSortPage,
        setShowSortPage,
        showFilterPage,
        setShowFilterPage,
    } = useProductsContext();

    return (
        <div>
            <ul className="products">
                {productData.map((book) => (
                    <li className="card" key={book.id}>
                        <img src={book.image} alt="" className="card-cover" />
                        <div className="card-icon">
                            <HeartSvg />
                        </div>
                        <div className="card-text">
                            <div className="card-heading">{book.name}</div>
                            <div className="card-sub-heading">
                                {book.author}
                            </div>
                            <div className="card-price">
                                <span className="price">
                                    ₹{book.priceDiscounted}
                                </span>
                                <span className="price-original">
                                    ₹{book.price}
                                </span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="mobile-footer">
                <button
                    className="mobile-footer-button"
                    onClick={() => setShowSortPage(true)}
                >
                    {<SortSvg />}
                    <span className="mobile-footer-button-label">Sort</span>
                </button>
                <button
                    className="mobile-footer-button"
                    onClick={() => setShowFilterPage(true)}
                >
                    {<FilterSvg />}
                    <span className="mobile-footer-button-label">Filter</span>
                </button>
            </div>
            {showSortPage && <SortPage />}
            {showFilterPage && <FilterPage />}
        </div>
    );
}
