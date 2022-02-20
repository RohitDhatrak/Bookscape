import React from "react";
import { filtersObj } from "../../../../../components/Helpers/data";
import { useReducerContext } from "../../../../../Context/ReducerContext";

export function SidePannel() {
    const { dispatch, filterBy } = useReducerContext();

    function isChecked(property, listItem) {
        return filterBy[property].includes(listItem);
    }

    function updateFilter(property, listItem) {
        dispatch({
            type: "FILTER",
            payload: {
                property: property,
                selection: listItem,
            },
        });
    }

    return (
        <div className="side-pannel">
            <div className="side-pannel-heading">Filters</div>
            {Object.keys(filtersObj).map((property) => (
                <ul className="sub-section" key={property}>
                    <li className="sub-section-heading">{property}</li>
                    {filtersObj[property].map((listItem) => (
                        <li className="sub-section-item" key={listItem}>
                            <label style={{ cursor: "pointer" }}>
                                <input
                                    type="checkbox"
                                    checked={isChecked(property, listItem)}
                                    onChange={() =>
                                        updateFilter(property, listItem)
                                    }
                                />
                                {listItem}
                            </label>
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    );
}
