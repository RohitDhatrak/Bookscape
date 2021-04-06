import React from "react";
import { ProductListing } from "./Pages/ProductListing/ProductListing";
import { WishList } from "./Pages/WishList/WishList";
import { Checkout } from "./Pages/Checkout/Checkout";
import { ProductsContextProvider } from "./Context/ProductsContext";
import { useRouteContext } from "./Context/RouteContext";
import { ReducerContextProvider } from "./Context/ReducerContext";

export function App() {
    const { route } = useRouteContext();

    return (
        <div>
            <ReducerContextProvider>
                <ProductsContextProvider>
                    {route === "products" && <ProductListing />}
                </ProductsContextProvider>
                {route === "wishlist" && <WishList />}
                {route === "cart" && <Checkout />}
            </ReducerContextProvider>
        </div>
    );
}
