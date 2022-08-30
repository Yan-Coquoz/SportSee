// @ts-nocheck
import React from "react";
import CustomCursor from "../CustomCursor";
import { handleFormatTick } from "../../Utils/formattedDatas";

import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  YAxis,
} from "recharts";
import CustomTooltip from "../CustomTooltip";
import "./style.scss";

/**
 * It's a function that returns a div with a title, a responsive container, a line chart, a line, a y
 * axis, an x axis, and a tooltip
 *
 * @prop {Object} average Data from a user to LineChart
 * @returns {React.ReactElement} A graph line chart
 */
const GraphLineChart = ({ average }) => {
  return (
    <div className="linechart">
      <p className="linechart__title">Durée moyenne des sessions</p>
      <ResponsiveContainer
        width="100%"
        height={263}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <LineChart
          data={average.sessions}
          style={{ background: "red", borderRadius: "10px" }}
          width={258}
          height={235}
          margin={{ top: 0, right: 0, bottom: 10, left: 0 }}
        >
          <Line
            type="natural"
            dataKey="sessionLength"
            dot={false}
            activeDot={{ stroke: "red", strokeWidth: 2, r: 3 }}
            unit={"min"}
            stroke={"#FFF"}
            strokeWidth={2}
          />
          <YAxis hide padding={{ top: 70, bottom: 20 }} />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickFormatter={handleFormatTick}
            padding={{ right: 20, left: 20 }}
            stroke={"#fff"}
            interval={"preserveStartEnd"}
          />
          <Tooltip
            wrapperStyle={{
              background: "#FFF",
              color: "#000",
              width: "39px",
              height: "25px",
              outline: "none",
            }}
            labelStyle={{ display: "none", border: "none" }}
            content={<CustomTooltip />}
            cursor={<CustomCursor />}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

GraphLineChart.propTypes = {
  average: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.number.isRequired,
        sessionLength: PropTypes.number.isRequired,
      }).isRequired,
    ),
  }).isRequired,
};
export default GraphLineChart;
