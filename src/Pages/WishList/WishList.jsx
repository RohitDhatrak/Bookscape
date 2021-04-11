import React from "react";
import { Header } from "../../components/Header/Header";
import { useReducerContext } from "../../Context/ReducerContext";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { useRouteContext } from "../../Context/RouteContext";
import { BackArrowSvg, CartSvg } from "../../components/Helpers/Svg";
import wishlist from "../../assets/wishlist.png";

export function WishList() {
    const { wishList } = useReducerContext();
    const { route, setRoute, lastRoute, setLastRoute } = useRouteContext();

    function goToProductsPage() {
        setLastRoute([...lastRoute, route]);
        setRoute("products");
    }

    return (
        <div>
            <nav className="wishlist-desktop-nav">
                <Header />
            </nav>
            <nav className="wishlist-mobile-nav">
                <span
                    onClick={() => {
                        setRoute(lastRoute[lastRoute.length - 1]);
                        setLastRoute(lastRoute.slice(0, -1));
                    }}
                >
                    <BackArrowSvg />
                </span>
                <span className="wishlist-mobile-nav-header">
                    <span className="wishlist-heading">Wishlist</span>
                    <span className="wishlist-sub-heading">
                        {wishList.length} Items
                    </span>
                </span>
                <span
                    className="wishlist-mobile-nav-cart nav-btns"
                    onClick={() => {
                        setLastRoute([...lastRoute, route]);
                        setRoute("cart");
                    }}
                >
                    <CartSvg />
                </span>
            </nav>
            <div className="wish-list-display">
                {wishList.map((book) => (
                    <ProductCard book={book} key={book.id} />
                ))}
            </div>
            {wishList.length === 0 ? (
                <div className="wishlist-is-empty-page">
                    <img src={wishlist} alt="" className="wishlist-image" />
                    <div className="wishlist-is-empty-page-text">
                        Wishlist is empty
                    </div>
                    <button
                        className="wishlist-is-empty-page-button"
                        onClick={goToProductsPage}
                    >
                        Continue shopping
                    </button>
                </div>
            ) : null}
        </div>
    );
}
