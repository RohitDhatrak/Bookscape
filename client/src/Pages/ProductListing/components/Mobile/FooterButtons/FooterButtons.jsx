import React from "react";
import { useNavigate } from "react-router-dom";
import { useProductsContext } from "../../../../../Context/ProductsContext";
import { SortSvg, FilterSvg } from "../../../../../components/Helpers/Svg";
import { useReducerContext } from "../../../../../Context/ReducerContext";

export function FooterButtons() {
    const { setShowSortPage } = useProductsContext();
    const { dispatch } = useReducerContext();
    const navigate = useNavigate();

    function openFilterPageAndSavePreviousFilter() {
        dispatch({
            type: "SAVE PREVIOUS FILTER",
        });
        navigate("/filter");
    }

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
                onClick={openFilterPageAndSavePreviousFilter}
            >
                {<FilterSvg />}
                <span className="mobile-footer-button-label">Filter</span>
            </button>
        </div>
    );
}
