import React from "react";
import Button from "../Button";
import "./style.scss";
import meditation from "../../assets/meditation.svg";
import natation from "../../assets/natation.svg";
import cyclisme from "../../assets/cyclisme.svg";
import musculation from "../../assets/musculation.svg";

const VerticalNav = () => {
  function handleGetMeditationData() {
    console.log("mediatation");
  }
  function handleGetNatationData() {
    console.log("natation");
  }
  function handleGetCyclismeData() {
    console.log("cyclisme");
  }
  function handleGetMusculationData() {
    console.log("musculation");
  }

  return (
    <div className="vn-container">
      <nav className="vn-container__bloc-nav">
        <ul className="vn-container__bloc-nav__bloc-ul">
          <Button srcImg={meditation} launch={handleGetMeditationData} />
          <Button srcImg={natation} launch={handleGetNatationData} />
          <Button srcImg={cyclisme} launch={handleGetCyclismeData} />
          <Button srcImg={musculation} launch={handleGetMusculationData} />
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
