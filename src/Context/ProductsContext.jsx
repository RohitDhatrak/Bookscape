import React, { createContext, useContext, useState, useReducer } from "react";
import { reducer, initialState } from "../Reducer/ProductsReducer";
const ProductsContext = createContext();

export function ProductsContextProvider({ children }) {
    const [showSortPage, setShowSortPage] = useState(false);
    const [showFilterPage, setShowFilterPage] = useState(false);
    const [selectedSort, setSelectedSort] = useState("Best Selling");
    const [selectedFilter, setSelectedFilter] = useState("genre");
    const [{ filterBy, sortBy }, dispatch] = useReducer(reducer, initialState);

    const data = {
        showSortPage,
        setShowSortPage,
        showFilterPage,
        setShowFilterPage,
        selectedSort,
        setSelectedSort,
        filterBy,
        sortBy,
        dispatch,
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
