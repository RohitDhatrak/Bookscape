import React from "react";
import { Link } from "react-router-dom";

export function Page404() {
    return (
        <div className="page-404">
            <div className="page-404-heading">404</div>
            <div className="page-404-subheading">Page Not Found</div>
            <div className="page-404-description">
                <div>We're sorry the page you requested could not be found</div>
                <div>Please go back to the homepage</div>
            </div>
            <Link to="/">
                <button className="page-404-button">Go to Home</button>
            </Link>
        </div>
    );
}
