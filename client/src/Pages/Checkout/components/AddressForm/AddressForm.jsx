import React, { useState } from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import form from "./AddressForm.module.css";
import { saveUserAddress } from "../../../../services/networkCalls";
import { useReducerContext } from "../../../../Context/ReducerContext";

export function AddressForm() {
    const { user, dispatch, userId } = useReducerContext();
    const [address, setAddress] = useState(user?.address || "");
    const [city, setCity] = useState(user?.city || "");
    const [pincode, setPincode] = useState(user?.pincode || "");
    const [state, setState] = useState(user?.state || "");
    const [loading, setLoading] = useState(false);

    async function saveAddress() {
        setLoading(true);
        const userData = await saveUserAddress(
            address,
            city,
            pincode,
            state,
            userId
        );
        dispatch({ type: "SET USER", payload: userData });
        setLoading(false);
    }

    const isEmpty =
        pincode.trim() === "" ||
        address.trim() === "" ||
        city.trim() === "" ||
        state.trim() === "";

    const isChanged =
        address !== user?.address ||
        city !== user?.city ||
        pincode !== user?.pincode ||
        state !== user?.state;

    return (
        <div className={form.body}>
            <FormControl isInvalid={isEmpty}>
                <FormLabel htmlFor="address" className={form.label}>
                    Address
                </FormLabel>
                <Input
                    id="address"
                    className={form.input}
                    type="text"
                    value={address}
                    placeholder="Address (House No., Street, Locality)"
                    onChange={(e) => setAddress(e.target.value)}
                />
                <FormLabel htmlFor="city" className={form.label}>
                    City
                </FormLabel>
                <Input
                    id="city"
                    className={form.input}
                    type="text"
                    value={city}
                    placeholder="City"
                    onChange={(e) => setCity(e.target.value)}
                />
                <FormLabel htmlFor="pincode" className={form.label}>
                    Pincode
                </FormLabel>
                <Input
                    id="pincode"
                    className={form.input}
                    type="text"
                    value={pincode}
                    placeholder="Enter your pincode"
                    onChange={(e) => setPincode(e.target.value)}
                />
                <FormLabel htmlFor="state" className={form.label}>
                    State/County
                </FormLabel>
                <Input
                    id="state"
                    className={form.input}
                    type="text"
                    value={state}
                    placeholder="State/County"
                    onChange={(e) => setState(e.target.value)}
                />
                {!isEmpty && isChanged && (
                    <Button
                        disabled={loading}
                        className={form.button}
                        onClick={saveAddress}
                    >
                        {loading ? "Saving..." : "Save Address"}
                    </Button>
                )}
            </FormControl>
        </div>
    );
}
