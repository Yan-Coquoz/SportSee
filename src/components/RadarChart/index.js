import React from "react";
import PropTypes from "prop-types";
import { reFormatDatas } from "../../Utils/formattedDatas";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";
import "./style.scss";

/**
 * It takes a prop called perf, which is an object with a bunch of properties, and returns a div   with a RadarChart inside of it
 *
 * @prop   {Object}  perf  Contain datas from the API about user performances
 *
 * @return  {React.ReactElement}
 */
const GraphRadarChart = ({ perf }) => {
  const datas = reFormatDatas(perf);

  return (
    <div className="radarchart">
      <ResponsiveContainer>
        <RadarChart outerRadius={75} data={datas}>
          <PolarGrid />
          <PolarAngleAxis
            dataKey="kind"
            orient={30}
            style={{ color: "#fff" }}
            stroke={"#fff"}
            tickLine={false}
            radius={10}
            fontSize={12}
            strokeWidth={1}
          />
          <Radar dataKey="value" stroke="red" fill="red" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

GraphRadarChart.propTypes = {
  perf: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    kind: PropTypes.object,
    data: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default GraphRadarChart;
