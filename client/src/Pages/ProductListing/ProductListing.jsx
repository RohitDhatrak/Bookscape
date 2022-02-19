import React, { useEffect } from "react";
import { useProductsContext } from "../../Context/ProductsContext";
import { Header } from "../../components/Header/Header";
import { SortByDropDown } from "./components/Desktop/SortByDropDown/SortByDropDown";
import { SidePannel } from "./components/Desktop/SidePannel/SidePannel";
import { ProductsGrid } from "./components/ProductsGrid/ProductsGrid";
import { FooterButtons } from "./components/Mobile/FooterButtons/FooterButtons";
import { SortPage } from "./components/Mobile/SortPage/SortPage";
import { FilterPage } from "./components/Mobile/FilterPage/FilterPage";
import { useReducerContext } from "../../Context/ReducerContext";

export function ProductListing() {
    const { showSortPage, showFilterPage } = useProductsContext();
    const { dispatch } = useReducerContext();

    useEffect(() => {
        window.scrollTo(0, 0);
        return () => dispatch({ type: "CLEAR FILTER" });
    }, []);

    return (
        <div className="products-main-container">
            <Header />
            <SidePannel />
            <SortByDropDown />
            <ProductsGrid />
            <FooterButtons />
            {showSortPage && <SortPage />}
            {showFilterPage && <FilterPage />}
        </div>
    );
}
