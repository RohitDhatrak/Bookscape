import React, { useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { CartProducts } from "./components/CartProducts/CartProducts";
import { CartInvoice } from "./components/CartInvoice/CartInvoice";
import { useReducerContext } from "../../Context/ReducerContext";

export function Cart() {
    const { dispatch } = useReducerContext();

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch({ type: "CLEAR FILTER" });
    }, []);

    return (
        <div className="cart-page">
            <Header />
            <div className="cart-page-body">
                <CartProducts />
                <CartInvoice />
            </div>
        </div>
    );
}
