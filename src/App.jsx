import React from "react";
import { ProductListing } from "./Pages/ProductListing";
import { ProductsContextProvider } from "./Context/ProductsContext";
import { useRouteContext } from "./Context/RouteContext";

export function App() {
    const { route } = useRouteContext();

    return (
        <div>
            <ProductsContextProvider>
                {route === "products" && <ProductListing />}
            </ProductsContextProvider>
            {/* {route === "cart" && } */}
            {/* {route === "wishlist && "} */}
        </div>
    );
}
