import React from "react";
import PropTypes from "prop-types";
import { renderHello } from "../../Utils/others";
import "./style.scss";

/**
 * It's a function that takes in a name and returns a div with a h1 and a h3 inside.
 * @prop   {?String}  name  Name's user
 *
 * @return  {React.ReactElement} A function that returns a component.
 */
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
