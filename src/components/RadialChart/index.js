import React from "react";
import PropTypes from "prop-types";
import { ResponsiveContainer, RadialBarChart, RadialBar } from "recharts";
import "./style.scss";

/**
 * It takes a data object as an argument, and returns a RadialBarChart component
 *
 * @param   {object}  score  Contain datas from the API about user score.
 *
 * @return  {React.ReactElement}
 */
const GraphRadialChart = (score) => {
  const datas = [];
  datas.push(score);
  // console.log(typeof score);
  const dataValue = 360 * datas[0].score;
  const style = {
    background: "#fff",
    fill: "red",
  };
  return (
    <div className="radialchart">
      <h3 className="radialchart__title">Score</h3>
      <div className="radialchart__bloc-score">
        <p className="radialchart__bloc-score__score">
          {datas[0].score * 100}%
        </p>
        <span className="radialchart__bloc-score__text">de votre objectif</span>
      </div>

      <ResponsiveContainer>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="60%"
          outerRadius="80%"
          barSize={10}
          startAngle={-180}
          endAngle={-180 + -dataValue}
          data={datas}
          style={{ background: "transparent" }}
        >
          <RadialBar
            background={{ fill: "#fbfbfb" }}
            dataKey={"score"}
            style={style}
            cornerRadius={5}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};
GraphRadialChart.propTypes = {
  score: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
};
export default GraphRadialChart;
