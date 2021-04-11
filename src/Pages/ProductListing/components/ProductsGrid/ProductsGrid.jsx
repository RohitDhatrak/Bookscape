import React from "react";
import { useReducerContext } from "../../../../Context/ReducerContext";
import { ProductCard } from "../../../../components/ProductCard/ProductCard";
import { filtersObj } from "../../../../components/Helpers/data";

export function ProductsGrid() {
    const { filterBy, sortBy, productsList } = useReducerContext();

    function filterByEachCategory(data, property) {
        return data.filter((product) => {
            if (!filterBy[property].length) {
                return true;
            }
            return filterBy[property].includes(product[property]);
        });
    }

    function getFilteredData() {
        return Object.keys(filtersObj).reduce(
            (filteredArray, property) =>
                filterByEachCategory(filteredArray, property),
            productsList
        );
    }

    function getSortedData(data) {
        if (sortBy === "PRICE: HIGH TO LOW") {
            return data.sort(
                (product1, product2) =>
                    product2.priceDiscounted - product1.priceDiscounted
            );
        } else if (sortBy === "PRICE: LOW TO HIGH") {
            return data.sort(
                (product1, product2) =>
                    product1.priceDiscounted - product2.priceDiscounted
            );
        } else if (sortBy === "BEST SELLING") {
            return data.sort(
                (product1, product2) =>
                    product2.salesCount - product1.salesCount
            );
        } else if (sortBy === "NEWEST ARRIVALS") {
            return data.sort(
                (product1, product2) => product2.dateAdded - product1.dateAdded
            );
        }
    }
    const filteredData = getFilteredData();
    const sortedData = getSortedData(filteredData);

    return (
        <ul className="products">
            {sortedData.map((book) => (
                <ProductCard book={book} key={book.id} />
            ))}
        </ul>
    );
}
