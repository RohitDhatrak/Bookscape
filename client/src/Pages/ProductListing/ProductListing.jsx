import React, { useEffect } from "react";
import { useProductsContext } from "../../Context/ProductsContext";
import { Header } from "../../components/Header/Header";
import { SortByDropDown } from "./components/Desktop/SortByDropDown/SortByDropDown";
import { SidePannel } from "./components/Desktop/SidePannel/SidePannel";
import { ProductsGrid } from "./components/ProductsGrid/ProductsGrid";
import { FooterButtons } from "./components/Mobile/FooterButtons/FooterButtons";
import { SortPage } from "./components/Mobile/SortPage/SortPage";

export function ProductListing() {
    const { showSortPage, setShowSortMenu } = useProductsContext();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div
            className="products-main-container"
            onClick={() => setShowSortMenu(false)}
        >
            <Header />
            <SidePannel />
            <SortByDropDown />
            <ProductsGrid />
            <FooterButtons />
            {showSortPage && <SortPage />}
        </div>
    );
}
