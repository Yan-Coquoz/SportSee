import React from "react";
import calorie from "../../assets/calories.svg";
import protein from "../../assets/protein.svg";
import fat from "../../assets/fat.svg";
import carb from "../../assets/carbs.svg";
import PropTypes from "prop-types";
import "./style.scss";

/**
 * It takes in a type and a countValue, and returns a div with an image, a paragraph, and a span.
 *
 * @prop   { String }  type Type of macronutrient
 * @prop   { ?String }  countValue  Value of the macronutrient
 *
 * @return  {React.ReactElement}        A React component.
 */
const StatCard = ({ type, countValue }) => {
  let img,
    typeName = "g",
    name;
  switch (type) {
    case "calorie":
      img = calorie;
      typeName = "kCal";
      name = "Calories";
      break;
    case "protein":
      img = protein;
      name = "Proteines";
      break;
    case "lipide":
      img = fat;
      name = "Lipides";
      break;
    case "glucide":
      img = carb;
      name = "Glucides";
      break;
  }
  return (
    <div className="statcard">
      <div className="statcard__bloc_img">
        <img src={img} alt="icon" className="statcard__bloc_img-img" />
      </div>
      <div className="statcard__bloc_value">
        <p className="statcard__bloc_value-data">
          <strong>{countValue}</strong>
          <strong>{typeName}</strong>
        </p>
        <span className="statcard__bloc_value-type">{name}</span>
      </div>
    </div>
  );
};

StatCard.propTypes = {
  type: PropTypes.string.isRequired,
  countValue: PropTypes.number.isRequired,
};

export default StatCard;
