import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { Products } from "./components/Products/Products";
import { SidePannel } from "./components/SidePannel/SidePannel";
import { ProductsContextProvider } from "./Context/ProductsContext";

export function App() {
    const [data, update] = useState();
    return (
        <div>
            <Header />
            <SidePannel />
            <ProductsContextProvider>
                <Products />
            </ProductsContextProvider>
        </div>
    );
}
