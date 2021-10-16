import React from "react";
import { sortByList } from "../../../../../components/Helpers/data";
import { useProductsContext } from "../../../../../Context/ProductsContext";
import { useReducerContext } from "../../../../../Context/ReducerContext";

export function SortPage() {
    const { setShowSortPage, selectedSort, setSelectedSort } =
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
        <div className="sort-page" onClick={() => setShowSortPage(false)}>
            <ul className="sort-page-list">
                <li className="sort-page-list-heading">Sort By</li>
                {sortByList.map((listItem) => (
                    <li
                        style={{
                            color: `${
                                selectedSort === listItem ? "#2c8373" : "#000"
                            }`,
                        }}
                        className={`sort-page-list-item `}
                        onClick={() => updateSorting(listItem)}
                        key={listItem}
                    >
                        {listItem}
                    </li>
                ))}
            </ul>
        </div>
    );
}
