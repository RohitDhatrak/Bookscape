import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ProductListing } from "./Pages/ProductListing/ProductListing";
import { WishList } from "./Pages/WishList/WishList";
import { Cart } from "./Pages/Cart/Cart";
import { ProductsContextProvider } from "./Context/ProductsContext";
import { ProductDetails } from "./Pages/ProductDetails/ProductDetails";
import { Page404 } from "./Pages/404/Page404";
import { Login } from "./Pages/Login/Login";
import { Signup } from "./Pages/Signup/Signup";
import { Home } from "./Pages/Home/Home";
import { PrivateRoute } from "./components/PrivateRoute";
import { Account } from "./Pages/Account/Account";
import { useReducerContext } from "./Context/ReducerContext";
import { LoaderSvg } from "./components/Helpers/Svg";
import {
    getProductsData,
    getCartData,
    getWishListData,
} from "./utils/networkCalls";

function ProductsPageWithContext() {
    return (
        <ProductsContextProvider>
            <ProductListing />
        </ProductsContextProvider>
    );
}

export function App() {
    const { dispatch } = useReducerContext();
    const [isLoading, setIsLoading] = useState(true);

    async function loadInitialData() {
        const productsData = await getProductsData();
        dispatch({ type: "LOAD PRODUCTS", payload: productsData });
        const session = JSON.parse(localStorage.getItem("session"));
        if (session?.isUserLoggedIn) {
            dispatch({ type: "RESUME SESSION", payload: session.userId });
            const cart = await getCartData(session.userId);
            const wishList = await getWishListData(session.userId);
            dispatch({
                type: "LOAD USER DATA",
                payload: {
                    cart: cart,
                    wishList: wishList,
                },
            });
        }
        setIsLoading(false);
    }

    useEffect(() => {
        loadInitialData();
    }, []);

    if (isLoading) {
        return (
            <div className="loading-svg">
                <LoaderSvg />
            </div>
        );
    }

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <PrivateRoute path="/wishlist" element={<WishList />} />
            <Route path="/products" element={<ProductsPageWithContext />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:bookId" element={<ProductDetails />} />
            <Route path="*" element={<Page404 />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <PrivateRoute path="/my/profile" element={<Account />} />
        </Routes>
    );
}
