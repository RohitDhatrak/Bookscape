import React from "react";
import { useProductsContext } from "../../../Context/ProductsContext";
import { filterObj } from "../../Helpers/data";

export function FilterPage() {
    const { setShowFilterPage } = useProductsContext();

    return (
        <div className="filter-page">
            <div className="filter-page-heading">Filters</div>
            <ul className="filter-page-list">
                {Object.keys(filterObj).map((item) => (
                    <li className="filter-page-list-item">{item}</li>
                ))}
            </ul>
            <div className="filter-page-list-details"></div>
            <div className="mobile-footer">
                <button
                    className="mobile-footer-button close-button"
                    onClick={() => setShowFilterPage(false)}
                >
                    Close
                </button>
                <button className="mobile-footer-button apply-button">
                    Apply
                </button>
            </div>
        </div>
    );
}
