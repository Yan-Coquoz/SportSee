import React from "react";
import HorizontalNav from "../HorizontalNav";
import VerticalNav from "../VerticalNav";
import "./style.scss";

/**
 * It returns a div that contains a HorizontalNav component and a VerticalNav component
 * @returns A div with two components inside of it.
 */
const Accueil = () => {
  return (
    <div>
      <HorizontalNav />
      <VerticalNav />
    </div>
  );
};

export default Accueil;
