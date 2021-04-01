import React, { useState } from "react";
import { Products } from "./components/Products/Products";
import { ProductsContextProvider } from "./Context/ProductsContext";

export function App() {
    const [data, update] = useState();
    return (
        <div>
            <ProductsContextProvider>
                <Products />
            </ProductsContextProvider>
        </div>
    );
}
