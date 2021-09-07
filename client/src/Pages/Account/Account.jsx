import React from "react";
import { Header } from "../../components/Header/Header";
import { useReducerContext } from "../../Context/ReducerContext";
import { setupAuthHeaderForServiceCalls } from "../..//services/setupAuthHeaders";

export function Account() {
    const { dispatch } = useReducerContext();

    function logoutUser() {
        dispatch({ type: "END SESSION" });
        setupAuthHeaderForServiceCalls(null);
        document.cookie =
            "jwt=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }

    return (
        <div>
            <Header />
            <div className="profile-page">
                <div className="password-change-form">
                    <div className="password-change-form-heading">
                        Change Password
                    </div>
                    <div className="password-change-form-input">
                        <label htmlFor="email">Old Password</label>
                        <input type="text" id="email" />
                    </div>
                    <div className="password-change-form-input">
                        <label htmlFor="password">New Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="password-change-form-input">
                        <label htmlFor="password">Confirm New Password</label>
                        <input type="password" id="password" />
                    </div>
                    <button className="password-change-form-button">
                        Change Password
                    </button>
                </div>
            </div>
            <button className="logout-button" onClick={logoutUser}>
                Logout
            </button>
        </div>
    );
}
