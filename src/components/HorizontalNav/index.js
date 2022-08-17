import React from "react";
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
                        <a
                            to="/"
                            className="hn_container__bloc-nav__bloc-list__list__nav-link"
                        >
                            Accueil
                        </a>
                    </li>
                    <li>
                        <a
                            to="/"
                            className="hn_container__bloc-nav__bloc-list__list__nav-link"
                        >
                            Profil
                        </a>
                    </li>
                    <li>
                        <a
                            to="/"
                            className="hn_container__bloc-nav__bloc-list__list__nav-link"
                        >
                            Réglage
                        </a>
                    </li>
                    <li>
                        <a
                            to="/"
                            className="hn_container__bloc-nav__bloc-list__list__nav-link"
                        >
                            Communauté
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default HorizontalNav;
