import React from "react";
import { useProductsContext } from "../../../../../Context/ProductsContext";
import { useReducerContext } from "../../../../../Context/ReducerContext";
import { filtersObj } from "../../../../../components/Helpers/data";
import { BackArrowSvg } from "../../../../../components/Helpers/Svg";
import { FooterButtons } from "../FooterButtons/FooterButtons";

export function FilterPage() {
    const { setShowFilterPage, selectedFilter, setSelectedFilter } =
        useProductsContext();

    const { dispatch, filterBy } = useReducerContext();

    function isChecked(property, listItem) {
        return filterBy[property].includes(listItem);
    }

    function updateFilter(property, listItem) {
        dispatch({
            type: "FILTER",
            payload: {
                property: property,
                selection: listItem,
            },
        });
    }

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
                                    checked={isChecked(
                                        selectedFilter,
                                        listItem
                                    )}
                                    onChange={() =>
                                        updateFilter(selectedFilter, listItem)
                                    }
                                />
                                {listItem}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <FooterButtons fromFilterPage={true} />
        </div>
    );
}
