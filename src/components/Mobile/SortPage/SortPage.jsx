import React, { useState } from "react";
import { sortByList } from "../../Helpers/data";
import { useProductsContext } from "../../../Context/ProductsContext";

export function SortPage() {
    const {
        setShowSortPage,
        selectedSort,
        setSelectedSort,
    } = useProductsContext();

    return (
        <div className="sort-page" onClick={() => setShowSortPage(false)}>
            <ul className="sort-page-list">
                <li className="sort-page-list-heading">Sort By</li>
                {sortByList.map((listItem) => (
                    <li
                        style={{
                            color: `${
                                selectedSort === listItem ? "red" : "#000"
                            }`,
                        }}
                        className={`sort-page-list-item `}
                        onClick={() => setSelectedSort(listItem)}
                        key={listItem}
                    >
                        {listItem}
                    </li>
                ))}
            </ul>
        </div>
    );
}
