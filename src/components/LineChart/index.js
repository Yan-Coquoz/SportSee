/* eslint-disable no-unused-vars */
import React from "react";
import CustomCursor from "../CustomCursor";
import { handleFormatTick } from "../../Utils/others";

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
            tickLine={
              false /* It's a function that takes a number as a parameter and returns a string. */
            }
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
            }}
            stroke={"#FFF"}
            dataKey="sessionLength"
            content={<CustomTooltip />}
            cursor={<CustomCursor />}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

GraphLineChart.propTypes = {
  average: PropTypes.object,
};
export default GraphLineChart;
