import React from "react";
import { ProductListing } from "./Pages/ProductListing/ProductListing";
import { WishList } from "./Pages/WishList/WishList";
import { Cart } from "./Pages/Cart/Cart";
import { ProductsContextProvider } from "./Context/ProductsContext";
import { ReducerContextProvider } from "./Context/ReducerContext";
import { ProductDetails } from "./Pages/ProductDetails/ProductDetails";
import { Page404 } from "./Pages/404/Page404";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { Signup } from "./Pages/Signup/Signup";

function ProductsPageWithContext() {
    return (
        <ProductsContextProvider>
            <ProductListing />
        </ProductsContextProvider>
    );
}

export function App() {
    const loggedIn = true;
    return (
        <ReducerContextProvider>
            <Routes>
                <Route path="/" element={<ProductsPageWithContext />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product/:bookId" element={<ProductDetails />} />
                <Route path="*" element={<Page404 />} />
                {loggedIn && <Route path="/login" element={<Login />} />}
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </ReducerContextProvider>
    );
}
