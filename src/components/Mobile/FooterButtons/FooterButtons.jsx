import React from "react";
import { useProductsContext } from "../../../Context/ProductsContext";
import { SortSvg, FilterSvg } from "../../Helpers/Svg";

export function FooterButtons() {
    const { setShowFilterPage, setShowSortPage } = useProductsContext();
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
