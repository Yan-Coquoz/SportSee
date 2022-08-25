import React from "react";
import logo from "../../assets/logo.svg";
import { fromLowerToUpperCase } from "../../Utils/others";
import { Link } from "react-router-dom";
import "./style.scss";

/**
 * It returns a div with a logo and a nav with a list of links
 * @returns {React.ReactElement} A component that displays a horizontal navigation bar.
 */
const HorizontalNav = () => {
  const links = ["accueil", "profile", "réglage", "communauté"];

  return (
    <div className="hn_container">
      <h2 className="hn_container__bloc-logo">
        <img
          src={logo}
          alt="logo SportSee"
          loading="lazy"
          className="hn_container__bloc-logo__logo"
        />
      </h2>
      <nav className="hn_container__bloc-nav">
        <ul className="hn_container__bloc-nav__bloc-list">
          {links.map((link, key) => {
            return (
              <Link
                to="/"
                className="hn_container__bloc-nav__bloc-list__list__nav-link"
                key={key}
              >
                {fromLowerToUpperCase(link)}
              </Link>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default HorizontalNav;
