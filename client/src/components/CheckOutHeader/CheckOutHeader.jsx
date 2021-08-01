import React from "react";
import { BackArrowSvg } from "../../components/Helpers/Svg";
import logo from "../../assets/logo.png";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";

export function CheckOutHeader({ heading, step }) {
    const history = createBrowserHistory();

    return (
        <div>
            <nav className="checkout-desktop-nav">
                <Link to="/">
                    <span className="nav-brand-link">
                        <span>
                            <img className="nav-brand-logo" src={logo} alt="" />
                            <span className="nav-brand-name">Bookscape</span>
                        </span>
                    </span>
                </Link>
            </nav>
            <nav className="checkout-mobile-nav">
                <span onClick={() => history.back()}>
                    <BackArrowSvg />
                </span>
                <span className="checkout-mobile-nav-header">{heading}</span>
                <span className="checkout-mobile-nav-steps">{step}</span>
            </nav>
        </div>
    );
}
