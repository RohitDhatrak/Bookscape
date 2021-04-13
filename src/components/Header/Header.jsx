import React from "react";
import logo from "../../assets/logo.png";
import { HeartSvg, CartSvg, SearchSvg } from "../Helpers/Svg";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="nav">
            <Link to="/">
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

                <figure className="avatar avatar-std avatar-square">
                    <img
                        src="https://pbs.twimg.com/profile_images/1140298044543401985/bcpbMyIV_400x400.jpg"
                        alt="profile"
                    />
                </figure>
            </ul>
        </header>
    );
}
