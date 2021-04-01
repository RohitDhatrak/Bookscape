import React from "react";
import { productData } from "../../faker";
import { HeartSvg, SortSvg, FilterSvg } from "../Helpers/Svg";
import { SortPage } from "./Mobile/SortPage";
import { Header } from "../Header/Header";
import { FilterPage } from "./Mobile/FilterPage";
import { useProductsContext } from "../../Context/ProductsContext";
import { sortByList } from "../Helpers/data";
import { DownSvg } from "../Helpers/Svg";
import { SidePannel } from "./Desktop/SidePannel";

export function Products() {
    const {
        showSortPage,
        setShowSortPage,
        showFilterPage,
        setShowFilterPage,
        selectedSort,
        setSelectedSort,
    } = useProductsContext();

    function SortByDropDown() {
        return (
            <div className="drop-down-container">
                <div className="drop-down">
                    <div className="drop-down-display">
                        <div className="drop-down-selected">
                            Sort by : <b>{selectedSort}</b>
                        </div>
                        <div className="down-arrow">{<DownSvg />}</div>
                    </div>
                    <ul className="drop-down-items-container">
                        {sortByList.map((listItem) => (
                            <li
                                className="drop-down-items"
                                style={{
                                    backgroundColor: `${
                                        listItem === selectedSort
                                            ? "#F4F4F5"
                                            : ""
                                    }`,
                                }}
                                onClick={() => setSelectedSort(listItem)}
                            >
                                {listItem}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

    function DisplayProducts() {
        return (
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
        );
    }

    function MobileFooter() {
        return (
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
        );
    }

    return (
        <div className="products-main-container">
            <Header />
            <SidePannel />
            <SortByDropDown />
            <DisplayProducts />
            <MobileFooter />
            {showSortPage && <SortPage />}
            {showFilterPage && <FilterPage />}
        </div>
    );
}
