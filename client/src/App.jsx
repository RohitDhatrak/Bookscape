import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ProductsContextProvider } from "./Context/ProductsContext";
import { PrivateRoute } from "./components/PrivateRoute";
import { useReducerContext } from "./Context/ReducerContext";
import { LoaderSvg } from "./components/Helpers/Svg";
import {
    ProductListing,
    WishList,
    Cart,
    ProductDetails,
    Page404,
    Login,
    Signup,
    Home,
} from "./Pages";
import {
    getProductsData,
    getCartData,
    getWishListData,
} from "./services/networkCalls";
import { setupAuthHeaderForServiceCalls } from "./services/setupAuthHeaders";
import { setupAuthExceptionHandler } from "./services/setupAuthExceptionHandler";

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
    const navigate = useNavigate();
    const session = JSON.parse(localStorage.getItem("session"));

    function logoutUser() {
        dispatch({ type: "END SESSION" });
        setupAuthHeaderForServiceCalls(null);
    }

    async function loadInitialData() {
        const productsData = await getProductsData();
        if (productsData) {
            dispatch({ type: "LOAD PRODUCTS", payload: productsData });
        }
        if (session?.userId) {
            const cart = await getCartData(session.userId);
            const wishList = await getWishListData(session.userId);
            if (cart && wishList) {
                dispatch({ type: "RESUME SESSION", payload: session.userId });
                dispatch({
                    type: "LOAD USER DATA",
                    payload: {
                        cart: cart,
                        wishList: wishList,
                    },
                });
            }
        }
        setIsLoading(false);
    }

    useEffect(() => {
        setupAuthHeaderForServiceCalls(session?.jwt);
        setupAuthExceptionHandler(logoutUser, navigate);
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
            <PrivateRoute path="/cart" element={<Cart />} />
            <Route path="/product/:bookId" element={<ProductDetails />} />
            <Route path="*" element={<Page404 />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}
