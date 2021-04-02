import React from "react";
import { useProductsContext } from "../../../Context/ProductsContext";
import { filtersObj } from "../../Helpers/data";
import { BackArrowSvg } from "../../Helpers/Svg";

export function FilterPage() {
    const {
        setShowFilterPage,
        dispatch,
        filterBy,
        selectedFilter,
        setSelectedFilter,
    } = useProductsContext();

    return (
        <div className="filter-page">
            <div className="filter-page-heading">
                <button
                    className="back-button"
                    onClick={() => setShowFilterPage(false)}
                >
                    <BackArrowSvg />
                </button>
                Filter by
                <span
                    className="clear-button"
                    onClick={() => dispatch({ type: "CLEAR FILTER" })}
                >
                    Clear All
                </span>
            </div>
            <div className="filter-page-container">
                <ul className="filter-page-list">
                    {Object.keys(filtersObj).map((property) => (
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
                            {property[0].toUpperCase() + property.substring(1)}
                        </li>
                    ))}
                </ul>
                <ul className="filter-page-list-details">
                    {filtersObj[selectedFilter].map((listItem) => (
                        <li key={listItem}>
                            <label className="filter-page-list-details-item">
                                <input
                                    type="checkbox"
                                    name=""
                                    id=""
                                    checked={filterBy[selectedFilter].includes(
                                        listItem
                                    )}
                                    onChange={() =>
                                        dispatch({
                                            type: "FILTER",
                                            payload: {
                                                property: selectedFilter,
                                                selection: listItem,
                                            },
                                        })
                                    }
                                />
                                {listItem}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
