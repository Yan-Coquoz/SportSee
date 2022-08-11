import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import meditaion from "../../assets/meditation.svg";
import natation from "../../assets/natation.svg";
import cyclisme from "../../assets/cyclisme.svg";
import musculation from "../../assets/musculation.svg";

const VerticalNav = () => {
    // écrire le code ici
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <img src={meditaion} alt="icon" loading="lazy" />{" "}
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img src={natation} alt="icon" loading="lazy" />{" "}
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img src={cyclisme} alt="icon" loading="lazy" />{" "}
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img src={musculation} alt="icon" loading="lazy" />{" "}
                        </Link>
                    </li>
                </ul>
            </nav>
            <p>Copyright, SportSee 2020</p>
        </div>
    );
};

export default VerticalNav;
