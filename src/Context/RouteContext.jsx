import React, { createContext, useContext, useState } from "react";
const RouteContext = createContext();

export function RouteContextProvider({ children }) {
    const [route, setRoute] = useState("products");

    const data = {
        route,
        setRoute,
    };

    return (
        <RouteContext.Provider value={data}>{children}</RouteContext.Provider>
    );
}

export function useRouteContext() {
    return useContext(RouteContext);
}
