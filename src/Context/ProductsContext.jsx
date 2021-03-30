import React, { createContext, useContext, useState } from "react";
const ProductsContext = createContext();

export function ProductsContextProvider({ children }) {
    const [showSortPage, setShowSortPage] = useState(false);
    const [showFilterPage, setShowFilterPage] = useState(false);

    const data = {
        showSortPage,
        setShowSortPage,
        showFilterPage,
        setShowFilterPage,
    };

    return (
        <ProductsContext.Provider value={data}>
            {children}
        </ProductsContext.Provider>
    );
}

export function useProductsContext() {
    return useContext(ProductsContext);
}
