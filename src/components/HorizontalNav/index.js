import React from "react";
import logo from "../../assets/logo.svg";
import { fromLowerToUpperCase } from "../../Utils/others";
import { Link } from "react-router-dom";
import "./style.scss";

const HorizontalNav = () => {
  const links = ["accueil", "profile", "réglage", "communauté"];
  let id = 12;

  const slugProfil = "user/";

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
              <li className="hn_container__bloc-nav__bloc-list__list" key={key}>
                {link === "profile" ? (
                  <Link
                    to={slugProfil + id}
                    className="hn_container__bloc-nav__bloc-list__list__nav-link"
                  >
                    {fromLowerToUpperCase(link)}
                  </Link>
                ) : (
                  <Link
                    to="/"
                    className="hn_container__bloc-nav__bloc-list__list__nav-link"
                  >
                    {fromLowerToUpperCase(link)}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default HorizontalNav;
