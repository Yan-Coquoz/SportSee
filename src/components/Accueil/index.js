import React from "react";
import HorizontalNav from "../HorizontalNav";
import VerticalNav from "../VerticalNav";
import "./style.scss";

const Accueil = () => {
    return (
        <div>
            <HorizontalNav />
            <VerticalNav />
        </div>
    );
};

export default Accueil;
