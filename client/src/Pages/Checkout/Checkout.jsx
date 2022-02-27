import React, { useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { CartInvoice } from "../Cart/components/CartInvoice/CartInvoice";
import { Address } from "./components/Address";

export function Checkout() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <div className="cart-page-body">
                <Address />
                <CartInvoice />
            </div>
        </div>
    );
}
