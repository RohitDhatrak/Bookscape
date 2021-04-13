import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState } from "../Reducer/Reducer";
const ReducerContext = createContext();

export function ReducerContextProvider({ children }) {
    const [
        { filterBy, sortBy, wishList, cart, productsList },
        dispatch,
    ] = useReducer(reducer, initialState);

    const data = {
        filterBy,
        sortBy,
        wishList,
        cart,
        productsList,
        dispatch,
    };

    return (
        <ReducerContext.Provider value={data}>
            {children}
        </ReducerContext.Provider>
    );
}

export function useReducerContext() {
    return useContext(ReducerContext);
}
