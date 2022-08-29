import React from "react";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import "./style.scss";

/**
 * It returns a div with a logo and two links about user's id
 *
 * @return  {React.ReactElement}
 */
const Accueil = () => {
  return (
    <div className="accueil">
      <div className="accueil__bloc-logo">
        <img src={Logo} alt="Logo" className="accueil__bloc-logo__logo" />
      </div>
      <div className="accueil__bloc-links">
        <div className="accueil__bloc-links__link">
          <Link to={"user/12"}>12</Link>
        </div>
        <div className="accueil__bloc-links__link">
          <Link to={"user/18"}>18</Link>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
