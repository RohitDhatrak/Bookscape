import React, { useState } from "react";
import { useProductsContext } from "../../../Context/ProductsContext";
import { filterObj } from "../../Helpers/data";

export function FilterPage() {
    const { setShowFilterPage } = useProductsContext();
    const [selectedFilter, setSelectedFilter] = useState("Genre");

    return (
        <div className="filter-page">
            <div className="filter-page-heading">
                Filter by
                <span className="clear-button">Clear All</span>
            </div>
            <div className="filter-page-container">
                <ul className="filter-page-list">
                    {Object.keys(filterObj).map((property) => (
                        <li
                            style={{
                                backgroundColor: `${
                                    selectedFilter === property
                                        ? "#fff"
                                        : "#f7f7f7"
                                }`,
                            }}
                            className="filter-page-list-item"
                            onClick={() => setSelectedFilter(property)}
                            key={property}
                        >
                            {property}
                        </li>
                    ))}
                </ul>
                <ul className="filter-page-list-details">
                    {filterObj[selectedFilter].map((listItem) => (
                        <li key={listItem}>
                            <label className="filter-page-list-details-item">
                                <input type="checkbox" name="" id="" />
                                {listItem}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
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
