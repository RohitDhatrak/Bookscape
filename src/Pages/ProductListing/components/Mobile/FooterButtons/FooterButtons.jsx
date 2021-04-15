import React from "react";
import { useProductsContext } from "../../../../../Context/ProductsContext";
import { SortSvg, FilterSvg } from "../../../../../components/Helpers/Svg";
import { useReducerContext } from "../../../../../Context/ReducerContext";

export function FooterButtons({ fromFilterPage }) {
    const { setShowFilterPage, setShowSortPage } = useProductsContext();
    const { dispatch } = useReducerContext();

    function openFilterPageAndSavePreviousFilter() {
        setShowFilterPage(true);
        dispatch({
            type: "SAVE PREVIOUS FILTER",
        });
    }

    function closeFilterPage() {
        setShowFilterPage(false);
    }

    function restorePreviousFilter() {
        dispatch({ type: "RESTORE PREVIOUS FILTER" });
        closeFilterPage();
    }

    return (
        <div>
            {fromFilterPage ? (
                <div className="mobile-footer">
                    <button
                        className="mobile-footer-button"
                        onClick={restorePreviousFilter}
                    >
                        <span className="mobile-footer-button-label mobile-footer-cancel-button">
                            Cancel
                        </span>
                    </button>
                    <button
                        className="mobile-footer-button mobile-footer-apply-button"
                        onClick={() => setShowFilterPage(false)}
                    >
                        <span className="mobile-footer-button-label">
                            Apply
                        </span>
                    </button>
                </div>
            ) : (
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
                        <span className="mobile-footer-button-label">
                            Filter
                        </span>
                    </button>
                </div>
            )}
        </div>
    );
}
