import React from "react";
import PropTypes from "prop-types";
import { reFormatDatas } from "../../Utils/others";
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
 * @param   {Object}  perf  Contain datas from the API about user performances
 *
 * @return  {React.ReactElement}        [return description]
 */
const GraphRadarChart = ({ perf }) => {
  const datas = reFormatDatas(perf);

  return (
    <div className="radarchart">
      <ResponsiveContainer width={"100%"} height={263}>
        <RadarChart outerRadius={75} height={263} data={datas}>
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
    userId: PropTypes.number,
    data: PropTypes.shape({ value: PropTypes.number, kind: PropTypes.string }),
    kind: PropTypes.arrayOf(PropTypes.string),
  }),
};
export default GraphRadarChart;
