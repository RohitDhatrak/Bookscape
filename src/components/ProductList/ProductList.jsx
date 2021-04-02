import React from "react";
import { useProductsContext } from "../../Context/ProductsContext";
import { productData } from "../../faker";
import { HeartSvg } from "../Helpers/Svg";

export function ProductList() {
    const { filterBy, sortBy } = useProductsContext();

    function filterByAuthor() {
        return productData.filter((product) => {
            if (!filterBy.author.length) {
                return true;
            }
            return filterBy.author.includes(product.author);
        });
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
    const filteredData = filterByAuthor();
    const sortedData = getSortedData(filteredData);

    return (
        <ul className="products">
            {sortedData.map((book) => (
                <li className="card" key={book.id}>
                    <img src={book.image} alt="" className="card-cover" />
                    <div className="card-icon">
                        <HeartSvg />
                    </div>
                    <div className="card-text">
                        <div className="card-heading">{book.name}</div>
                        <div className="card-sub-heading">{book.author}</div>
                        <div className="card-price">
                            <span className="price">
                                ₹{book.priceDiscounted}
                            </span>
                            <span className="price-original">
                                ₹{book.price}
                            </span>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}
