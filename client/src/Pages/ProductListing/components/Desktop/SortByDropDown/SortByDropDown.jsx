import React from "react";
import { useProductsContext } from "../../../../../Context/ProductsContext";
import { useReducerContext } from "../../../../../Context/ReducerContext";
import { sortByList } from "../../../../../components/Helpers/data";
import { DownSvg } from "../../../../../components/Helpers/Svg";

export function SortByDropDown() {
    const { selectedSort, setSelectedSort, showSortMenu, setShowSortMenu } =
        useProductsContext();
    const { dispatch } = useReducerContext();

    function updateSorting(listItem) {
        setSelectedSort(listItem);
        dispatch({
            type: "SORT",
            payload: listItem.toUpperCase(),
        });
    }

    return (
        <div className="drop-down-container">
            <div className="drop-down">
                <button
                    className="drop-down-display"
                    onClick={(e) => {
                        e.stopPropagation();
                        setShowSortMenu((value) => !value);
                    }}
                >
                    <div className="drop-down-selected">
                        Sort by : <b>{selectedSort}</b>
                    </div>
                    <div className="down-arrow">{<DownSvg />}</div>
                </button>
                <ul
                    className="drop-down-items-container"
                    style={{ display: showSortMenu ? "block" : "none" }}
                >
                    {sortByList.map((listItem) => (
                        <button
                            className="drop-down-items"
                            style={{
                                backgroundColor: `${
                                    listItem === selectedSort ? "#F4F4F5" : ""
                                }`,
                            }}
                            onClick={() => updateSorting(listItem)}
                            key={listItem}
                        >
                            {listItem}
                        </button>
                    ))}
                </ul>
            </div>
        </div>
    );
}
