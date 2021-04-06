import React from "react";
import { BackArrowSvg } from "../../components/Helpers/Svg";
import { CartCard } from "./CartCard/CartCard";
import { useRouteContext } from "../../Context/RouteContext";

export function Cart() {
    const { setRoute, lastRoute, setLastRoute } = useRouteContext();
    return (
        <div>
            <nav className="checkout-desktop-nav"></nav>
            <nav className="checkout-mobile-nav">
                <span
                    onClick={() => {
                        setRoute(lastRoute[lastRoute.length - 1]);
                        setLastRoute(lastRoute.slice(0, -1));
                    }}
                >
                    <BackArrowSvg />
                </span>
                <span className="checkout-mobile-nav-header">Cart</span>
                <span className="checkout-mobile-nav-steps">Step 1/3</span>
            </nav>
        </div>
    );
}
