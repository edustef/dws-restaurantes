import React from "react";
import MainMenuItem from "@/Shared/MainMenuItem";

export default ({ className }) => {
    return (
        <div className={className}>
            <MainMenuItem text="Intranet" link="intranet" icon="dashboard" />
            <MainMenuItem
                text="Restaurants"
                link="restaurants.index"
                icon="office"
            />
        </div>
    );
};
