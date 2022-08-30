import React from "react";
import "./style.scss";
import PropTypes from "prop-types";
import { placeLabelIntoTooltip } from "../../Utils/others";

/**
 * If the tooltip is active and there is data to display, then display the data.
 * @prop {Boolean} active whether the component is active or not (mouse over)
 * @prop {ArrayOfObject} payload Properties of each componant Bar
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
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.any),
};
export default CustomTooltip;
