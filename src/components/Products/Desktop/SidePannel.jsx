import React from "react";
import { filterObj } from "../../Helpers/data";

export function SidePannel() {
    return (
        <div className="side-pannel">
            <div className="side-pannel-heading">Filters</div>
            {Object.keys(filterObj).map((property) => (
                <ul className="sub-section" key={property}>
                    <li className="sub-section-heading">{property}</li>
                    {filterObj[property].map((listItem) => (
                        <li className="sub-section-item" key={listItem}>
                            <input type="checkbox" name="" id="" />
                            {listItem}
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    );
}
