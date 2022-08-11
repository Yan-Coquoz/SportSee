import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./style.scss";

const HorizontalNav = () => {
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
                    <li className="hn_container__bloc-nav__bloc-list__list">
                        <Link
                            to="/"
                            className="hn_container__bloc-nav__bloc-list__list__nav-link"
                        >
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            className="hn_container__bloc-nav__bloc-list__list__nav-link"
                        >
                            Profil
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            className="hn_container__bloc-nav__bloc-list__list__nav-link"
                        >
                            Réglage
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            className="hn_container__bloc-nav__bloc-list__list__nav-link"
                        >
                            Communauté
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

// HorizontalNav.propTypes = {};

export default HorizontalNav;
