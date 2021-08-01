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

            <div className="nav-search">
                <input
                    type="text"
                    placeholder="Search for book, author or genre"
                />
                {<SearchSvg />}
            </div>

            <ul className="nav-link-section">
                <li
                    className="nav-link nav-btns nav-search-btn"
                    onClick={() => {}}
                >
                    {<SearchSvg />}
                </li>
                <Link to="/wishlist">
                    <li className="nav-link nav-btns">{<HeartSvg />}</li>
                </Link>
                <Link to="/cart">
                    <li className="nav-link nav-btns">{<CartSvg />}</li>
                </Link>
                <Link to="/my/profile">
                    <li className="nav-link nav-btns profile-button">
                        {<ProfileSvg />}
                    </li>
                </Link>
            </ul>
        </header>
    );
}
