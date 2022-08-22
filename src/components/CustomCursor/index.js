import React from "react";
import { Rectangle } from "recharts";
import PropTypes from "prop-types";

/**
 * It takes the width of the chart and the points of the cursor and returns a rectangle with the width
 * of the chart minus the cursor's x position and the height of the chart.
 *
 * @typeDef prop
 * @prop {Number} width
 * @prop {Array} points
 * @return  {React.ReactElement}  A rectangle with a width of the difference between the width of the chart and the x value of the first point in the points array.
 */
const CustomCursor = (prop) => {
  const { width, points } = prop;
  const X = points[0].x;
  const Y = points[0].y;
  const sum = width - X;
  return (
    <Rectangle
      width={sum}
      height={263}
      x={X}
      y={Y}
      style={{ background: "red", opacity: 0.1 }}
    />
  );
};

CustomCursor.propTypes = {
  prop: PropTypes.shape({
    width: PropTypes.number.isRequired,
    points: PropTypes.arrayOf(
      PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
      }).isRequired,
    ).isRequired,
  }),
};
export default CustomCursor;
