// @ts-nocheck
import React from "react";
import CustomTooltip from "../CustomTooltip";
import { customTick } from "../../Utils/formattedDatas";
import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import "./style.scss";

/**
 * It's a function that takes an array of objects as a prop and returns a bar chart
 *
 * @prop   {Array}  sessions  [sessions description]
 *
 * @return  {React.ReactElement}            Bar Chart
 */
const GraphBarChart = ({ sessions }) => {
  return (
    <div className="barchart__container">
      <p className="barchart__container-title">Activité quotidienne</p>
      <ResponsiveContainer>
        <BarChart
          data={sessions}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          barGap={6}
        >
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          <XAxis
            dataKey={"day"}
            axisLine={false}
            domain={["dataMin + 1", "dataMax + 1"]}
            tickLine={false}
            tickFormatter={customTick}
          />
          <YAxis
            orientation="right"
            interval={"preserveStartEnd"}
            axisLine={false}
            allowDecimals={false}
            dataKey={"kilogram"}
            // doit avoir un correspondant dans Bar
            yAxisId={1}
            domain={["dataMin - 10", "dataMax + 10"]}
          />
          <YAxis hide dataKey={"calories"} yAxisId={2} />
          <Tooltip
            content={<CustomTooltip />}
            labelStyle={{
              display: "none",
            }}
            wrapperStyle={{
              color: "#FFF",
              background: "red",
              border: "none",
              outline: "none",
              width: "50px",
              height: "70px",
              textAlign: "center",
              lineHeight: "1.5",
            }}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          />
          <Legend
            height={40}
            verticalAlign="top"
            align="right"
            iconType={"circle"}
            style={{ margin: "1rem auto", width: "100px" }}
          />
          <Bar
            dataKey="kilogram"
            fill="#282d30"
            radius={[5, 5, 0, 0]}
            barSize={7}
            name={"Poids (kg)"}
            yAxisId={1}
          />
          <Bar
            yAxisId={2}
            dataKey="calories"
            fill="#e60000"
            barSize={7}
            radius={[5, 5, 0, 0]}
            name={"Calories brûlées (kCal)"}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
GraphBarChart.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    }),
  ),
};
export default GraphBarChart;
