import React from "react";
import { HeartSvg } from "../Helpers/Svg";

export function ProductCard({ book }) {
    return (
        <li className="card" key={book.id}>
            <img src={book.image} alt="" className="card-cover" />
            <div className="card-icon">
                <HeartSvg />
            </div>
            <div className="card-text">
                <div className="card-heading">{book.name}</div>
                <div className="card-sub-heading">{book.author}</div>
                <div className="card-price">
                    <span className="price">₹{book.priceDiscounted}</span>
                    <span className="price-original">₹{book.price}</span>
                </div>
            </div>
        </li>
    );
}
