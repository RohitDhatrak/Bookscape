import React from "react";
import { Header } from "../../components/Header/Header";
import { CartInvoice } from "../Cart/components/CartInvoice/CartInvoice";
import { Address } from "./components/Address";
import { useReducerContext } from "../../Context/ReducerContext";

export function Checkout() {
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
