import React, { useRef } from "react";
import { Link } from "react-router-dom";
import list from "./HorizontalScrollList.module.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { NextArrow, PrevArrow } from "../Helpers/Svg";

export function HorizontalScrollList({ products, listHeading }) {
    const listRef = useRef();

    function handleScroll(direction) {
        if (direction === "left") {
            listRef.current.scrollLeft -= 500;
        } else {
            listRef.current.scrollLeft += 500;
        }
    }

    return (
        <div className={list.container}>
            <div className={list.header}>
                {listHeading}
                <Link to="/products">
                    <span className={list.link}>View All</span>
                </Link>
            </div>
            <button
                className={list.backward}
                onClick={() => handleScroll("left")}
            >
                <PrevArrow />
            </button>
            <div className={list.grid} ref={listRef}>
                {products.map((book) => (
                    <ProductCard book={book} key={book._id} />
                ))}
            </div>
            <button
                className={list.forward}
                onClick={() => handleScroll("right")}
            >
                <NextArrow />
            </button>
        </div>
    );
}
