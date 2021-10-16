import React from "react";
import logo from "../../assets/logo.png";
import { HeartSvg, CartSvg, SearchSvg } from "../Helpers/Svg";
import { Link } from "react-router-dom";
import { ProfileSvg } from "../Helpers/Svg";

export function Header() {
    return (
        <header className="nav">
            <Link to="/" style={{ textDecoration: "none" }}>
                <span className="nav-brand-link">
                    <span>
                        <img className="nav-brand-logo" src={logo} alt="" />
                        <span className="nav-brand-name">Bookscape</span>
                    </span>
                </span>
            </Link>

            <div className="nav-link-section">
                <Link to="/wishlist">
                    <div className="nav-link nav-btns">{<HeartSvg />}</div>
                    <div></div>
                </Link>
                <Link to="/cart">
                    <div className="nav-link nav-btns">{<CartSvg />}</div>
                </Link>
                <Link to="/my/profile">
                    <div className="nav-link nav-btns profile-button">
                        {<ProfileSvg />}
                    </div>
                </Link>
            </div>
        </header>
    );
}
