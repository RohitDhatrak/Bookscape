import React from "react";
import { filterObj } from "../../Helpers/data";
import { useProductsContext } from "../../../Context/ProductsContext";

export function SidePannel() {
    const { dispatch, filterBy } = useProductsContext();

    return (
        <div className="side-pannel">
            <div className="side-pannel-heading">Filters</div>
            {Object.keys(filterObj).map((property) => (
                <ul className="sub-section" key={property}>
                    <li className="sub-section-heading">{property}</li>
                    {filterObj[property].map((listItem) => (
                        <li className="sub-section-item" key={listItem}>
                            <input
                                type="checkbox"
                                name=""
                                id=""
                                checked={filterBy[property].includes(listItem)}
                                onChange={() =>
                                    dispatch({
                                        type: property.toUpperCase(),
                                        payload: listItem,
                                    })
                                }
                            />
                            {listItem}
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    );
}
