import React from "react";

import "./style.scss";
import meditation from "../../assets/meditation.svg";
import natation from "../../assets/natation.svg";
import cyclisme from "../../assets/cyclisme.svg";
import musculation from "../../assets/musculation.svg";

const VerticalNav = () => {
    function handleGetMeditationData() {
        console.log("mediatation");
    }
    return (
        <div className="vn-container">
            <nav className="vn-container__bloc-nav">
                <ul className="vn-container__bloc-nav__bloc-ul">
                    <li className="vn-container__bloc-nav__bloc-ul__list">
                        <button
                            className="vn-container__bloc-nav__bloc-ul__list__button"
                            onClick={handleGetMeditationData}
                        >
                            <img
                                src={meditation}
                                alt="icon"
                                loading="lazy"
                                className="vn-container__bloc-nav__bloc-ul__list__button__img"
                            />
                        </button>
                    </li>
                    <li className="vn-container__bloc-nav__bloc-ul__list">
                        <button className="vn-container__bloc-nav__bloc-ul__list__button">
                            <img
                                src={natation}
                                alt="icon"
                                loading="lazy"
                                className="vn-container__bloc-nav__bloc-ul__list__button__img"
                            />
                        </button>
                    </li>
                    <li className="vn-container__bloc-nav__bloc-ul__list">
                        <button className="vn-container__bloc-nav__bloc-ul__list__button">
                            <img
                                src={cyclisme}
                                alt="icon"
                                loading="lazy"
                                className="vn-container__bloc-nav__bloc-ul__list__button__img"
                            />
                        </button>
                    </li>
                    <li className="vn-container__bloc-nav__bloc-ul__list">
                        <button className="vn-container__bloc-nav__bloc-ul__list__button">
                            <img
                                src={musculation}
                                alt="icon"
                                loading="lazy"
                                className="vn-container__bloc-nav__bloc-ul__list__button__img"
                            />
                        </button>
                    </li>
                </ul>
            </nav>
            <div className="vn-container__bloc-copyright">
                <p className="vn-container__bloc-copyright__copyright">
                    Copyright, SportSee 2020
                </p>
            </div>
        </div>
    );
};

export default VerticalNav;
