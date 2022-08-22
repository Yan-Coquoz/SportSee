import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

/**
 * If the payload has a unit property, return a paragraph with the value and unit.
 * Otherwise, if the payload has a length, return a list of the values.
 * Otherwise, return an empty string.
 * @param {Array} payload - [{payload: {…}, unit: "kCal", value: "1.5", dataKey: "calories", color: "#8884d8"}]
 */
const placeLabelIntoTooltip = (payload) => {
  if (typeof payload[0].unit !== "undefined") {
    return (
      <p style={{ textAlign: "center" }}>
        {payload[0].value} {payload[0].unit}
      </p>
    );
  }
  if (payload && payload.length) {
    return payload.map((prop, id) => {
      return prop.dataKey === "calories" ? (
        <li className="into__tooltip-list" key={id}>
          {prop.value}kCal
        </li>
      ) : (
        <li className="into__tooltip-list" key={id}>
          {prop.value}Kg
        </li>
      );
    });
  }

  return "";
};

/**
 * If the tooltip is active and there is data to display, then display the data.
 * @prop {Boolean} active si le composant est actif ou non (passage de la souris)
 * @prop {ArrayOfObject} payload Les propriétés de chaque Barres
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <ul className="into">{placeLabelIntoTooltip(payload)}</ul>
      </div>
    );
  }
};

CustomTooltip.propTypes = {
  active: PropTypes.bool.isRequired,
  payload: PropTypes.arrayOf(PropTypes.object),
};
export default CustomTooltip;
