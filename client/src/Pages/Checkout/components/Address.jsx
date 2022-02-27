import React, { useEffect } from "react";
import { AddressForm } from "./AddressForm/AddressForm";
import { getUserData } from "../../../services/networkCalls";
import { useReducerContext } from "../../../Context/ReducerContext";

export function Address() {
    const { dispatch, user, userId } = useReducerContext();

    useEffect(() => {
        window.scrollTo(0, 0);
        async function getUser() {
            const user = await getUserData(userId);
            dispatch({ type: "SET USER", payload: user });
        }
        getUser();
    }, []);

    return (
        <div className="cart-page-body-overview-and-products">
            <AddressForm user={user} dispatch={dispatch} userId={userId} />
        </div>
    );
}
