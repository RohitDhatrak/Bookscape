import React, { createContext, useContext, useState } from "react";
const ProductsContext = createContext();

export function ProductsContextProvider({ children }) {
    const [showSortPage, setShowSortPage] = useState(false);
    const [showSortMenu, setShowSortMenu] = useState(false);
    const [selectedSort, setSelectedSort] = useState("Best Selling");
    const [selectedFilter, setSelectedFilter] = useState("genres");

    const data = {
        showSortPage,
        setShowSortPage,
        selectedSort,
        setSelectedSort,
        selectedFilter,
        setSelectedFilter,
        showSortMenu,
        setShowSortMenu,
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
