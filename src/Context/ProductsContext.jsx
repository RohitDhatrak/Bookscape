import React, { createContext, useContext, useState, useReducer } from "react";
import { reducer, initialState } from "../Reducer/Reducer";
const ProductsContext = createContext();

export function ProductsContextProvider({ children }) {
    const [showSortPage, setShowSortPage] = useState(false);
    const [showFilterPage, setShowFilterPage] = useState(false);
    const [selectedSort, setSelectedSort] = useState("Best Selling");
    const [selectedFilter, setSelectedFilter] = useState("genre");

    const data = {
        showSortPage,
        setShowSortPage,
        showFilterPage,
        setShowFilterPage,
        selectedSort,
        setSelectedSort,
        selectedFilter,
        setSelectedFilter,
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
