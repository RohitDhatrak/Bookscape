import React from "react";
import { Header } from "../../components/Header/Header";
import bookbanner from "../../assets/book-banner.jpg";
import { Link } from "react-router-dom";
import { productData } from "../../faker";
import { ProductCard } from "../../components/ProductCard/ProductCard";

export function Home() {
    function getBestSellingBooks() {
        return productData
            .sort(
                (product1, product2) =>
                    product2.salesCount - product1.salesCount
            )
            .slice(0, 6);
    }

    function getNewBooks() {
        return productData
            .sort(
                (product1, product2) => product2.dateAdded - product1.dateAdded
            )
            .slice(0, 6);
    }

    return (
        <div className="home-page">
            <Header />
            <div className="home-page-banner-container">
                <img src={bookbanner} alt="" className="home-page-banner" />
                <div className="text-overlay-container">
                    <div className="text-overlay-text">
                        Up to 25% off on books
                    </div>
                    <Link to="/products">
                        <button className="text-overlay-button">
                            Shop now
                        </button>
                    </Link>
                </div>
            </div>
            <div className="books-listing-container">
                <div className="books-listing-header">
                    Bestselling Books
                    <Link to="/products">
                        <span className="books-listing-link">View All</span>
                    </Link>
                </div>
                <div className="books-listing-grid">
                    {getBestSellingBooks().map((book) => (
                        <ProductCard book={book} key={book.id} />
                    ))}
                </div>
            </div>
            <div className="books-listing-container">
                <div className="books-listing-header">
                    New Releases
                    <Link to="/products">
                        <span className="books-listing-link">View All</span>
                    </Link>
                </div>
                <div className="books-listing-grid">
                    {getNewBooks().map((book) => (
                        <ProductCard book={book} key={book.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}
