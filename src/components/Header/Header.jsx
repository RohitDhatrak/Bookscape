import React from "react";
import logo from "../../assets/logo.png";
import { HeartSvg, CartSvg, SearchSvg } from "../Helpers/Svg";

export function Header() {
    return (
        <header className="nav">
            <a className="nav-brand-link" href="./index.js">
                <span>
                    <img className="nav-brand-logo" src={logo} alt="" />
                    <span className="nav-brand-name">Bookoe</span>
                </span>
            </a>

            <div className="nav-search">
                <input type="text" />
                {<SearchSvg />}
            </div>

            <ul className="nav-link-section">
                <li className="nav-link nav-btns">{<HeartSvg />}</li>
                <li className="nav-link nav-btns">{<CartSvg />}</li>
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
