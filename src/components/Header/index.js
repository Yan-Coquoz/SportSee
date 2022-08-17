import React from "react";
import PropTypes from "prop-types";
import { renderHello } from "../../Utils/others";
import "./style.scss";

const Header = ({ name }) => {
    const time = renderHello();
    return (
        <div className="header-container">
            <h1 className="header-container__accueil">
                {time} <span>{name}</span>
            </h1>
            <h3 className="header-container__commentaire">
                Félicitation ! Vous avez explosé vos objectifs hier 👏
            </h3>
        </div>
    );
};
Header.propTypes = {
    name: PropTypes.string.isRequired,
};
export default Header;
