import React from "react";
import { sortByList } from "../../Helpers/data";
import { useProductsContext } from "../../../Context/ProductsContext";

export function SortPage() {
    const { setShowSortPage } = useProductsContext();

    return (
        <div className="sort-page" onClick={() => setShowSortPage(false)}>
            <div className="sort-page-background"></div>
            <ul className="sort-page-list">
                <li className="sort-page-list-heading">Sort By</li>
                {sortByList.map((listItem) => (
                    <li className={`sort-page-list-item `}>{listItem}</li>
                ))}
            </ul>
        </div>
    );
}
