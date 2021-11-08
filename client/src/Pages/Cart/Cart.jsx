import React, { useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { CartProducts } from "./components/CartProducts/CartProducts";
import { CartInvoice } from "./components/CartInvoice/CartInvoice";

export function Cart() {
    useEffect(() => {
        window.scrollTo(0, 0);
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
