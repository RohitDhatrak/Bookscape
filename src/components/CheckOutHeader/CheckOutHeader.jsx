import React from "react";
import { useRouteContext } from "../../Context/RouteContext";
import { BackArrowSvg } from "../../components/Helpers/Svg";

export function CheckOutHeader({ heading, step }) {
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
                <span className="checkout-mobile-nav-header">{heading}</span>
                <span className="checkout-mobile-nav-steps">{step}</span>
            </nav>
        </div>
    );
}
