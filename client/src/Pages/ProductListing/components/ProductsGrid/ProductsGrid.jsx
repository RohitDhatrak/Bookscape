import React from "react";
import { useReducerContext } from "../../../../Context/ReducerContext";
import { ProductCard } from "../../../../components/ProductCard/ProductCard";
import { filtersObj } from "../../../../components/Helpers/data";

export function ProductsGrid() {
    const { filterBy, sortBy, productsList } = useReducerContext();

    function filterByEachCategory(products, category) {
        return products.filter((product) => {
            if (!filterBy[category].length) {
                return true;
            }
            return product[category].some((field) =>
                filterBy[category].includes(field)
            );
        });
    }

    function getFilteredData() {
        return Object.keys(filtersObj).reduce(
            (filteredProducts, category) =>
                filterByEachCategory(filteredProducts, category),
            productsList
        );
    }

    function getSortedData(data) {
        if (sortBy === "PRICE: HIGH TO LOW") {
            return data.sort(
                (product1, product2) =>
                    product2.discountedPrice - product1.discountedPrice
            );
        } else if (sortBy === "PRICE: LOW TO HIGH") {
            return data.sort(
                (product1, product2) =>
                    product1.discountedPrice - product2.discountedPrice
            );
        } else if (sortBy === "BEST SELLING") {
            return data.sort(
                (product1, product2) =>
                    product2.salesCount - product1.salesCount
            );
        } else if (sortBy === "NEWEST ARRIVALS") {
            return data.sort((product1, product2) => {
                return product2.dateAdded - product1.dateAdded;
            });
        }
    }
    const filteredData = getFilteredData();
    const sortedData = getSortedData(filteredData);

    return (
        <ul className="products">
            {sortedData.map((book) => (
                <ProductCard book={book} key={book._id} />
            ))}
        </ul>
    );
}
