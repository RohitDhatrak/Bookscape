import React from "react";
import { filtersObj } from "../../Helpers/data";
import { useProductsContext } from "../../../Context/ProductsContext";

export function SidePannel() {
    const { dispatch, filterBy } = useProductsContext();

    return (
        <div className="side-pannel">
            <div className="side-pannel-heading">Filters</div>
            {Object.keys(filtersObj).map((property) => (
                <ul className="sub-section" key={property}>
                    <li className="sub-section-heading">{property}</li>
                    {filtersObj[property].map((listItem) => (
                        <li className="sub-section-item" key={listItem}>
                            <label>
                                <input
                                    type="checkbox"
                                    name=""
                                    id=""
                                    checked={filterBy[property].includes(
                                        listItem
                                    )}
                                    onChange={() =>
                                        dispatch({
                                            type: "FILTER",
                                            payload: {
                                                property: property,
                                                selection: listItem,
                                            },
                                        })
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
