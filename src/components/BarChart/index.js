import React from "react";
import CustomTooltip from "../CustomTooltip";
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

const data = [
  {
    day: "2020-07-01",
    kilogram: 80,
    calories: 240,
  },
  {
    day: "2020-07-02",
    kilogram: 80,
    calories: 220,
  },
  {
    day: "2020-07-03",
    kilogram: 81,
    calories: 280,
  },
  {
    day: "2020-07-04",
    kilogram: 81,
    calories: 290,
  },
  {
    day: "2020-07-05",
    kilogram: 80,
    calories: 160,
  },
  {
    day: "2020-07-06",
    kilogram: 78,
    calories: 162,
  },
  {
    day: "2020-07-07",
    kilogram: 76,
    calories: 390,
  },
];

const GraphBarChart = () => {
  return (
    <div className="barchart__container">
      <p className="barchart__container-title">Activité quotidienne</p>
      <ResponsiveContainer>
        <BarChart
          data={data}
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
            axisLine={false}
            domain={["dataMin + 1", "dataMax + 1"]}
            tickLine={false}
          />
          <YAxis
            orientation="right"
            // interval={"preserveStartEnd"}
            axisLine={false}
            allowDecimals={false}
            dataKey={"kilogram"}
            yAxisId={1} // doit avoir un correspondant dans Bar
            domain={["dataMin - 10", "dataMax + 10"]}
          />
          <YAxis
            hide
            dataKey={"calories"}
            yAxisId={2}
            // domain={["dataMin - 10", "dataMax + 10"]}
          />
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

export default GraphBarChart;
