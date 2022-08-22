/* eslint-disable no-unused-vars */
import React from "react";
import CustomCursor from "../CustomCursor";
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

const Data = {
  userId: 12,
  sessions: [
    {
      day: 1,
      sessionLength: 30,
    },
    {
      day: 2,
      sessionLength: 23,
    },
    {
      day: 3,
      sessionLength: 45,
    },
    {
      day: 4,
      sessionLength: 50,
    },
    {
      day: 5,
      sessionLength: 10,
    },
    {
      day: 6,
      sessionLength: 5,
    },
    {
      day: 7,
      sessionLength: 60,
    },
  ],
};

const GraphLineChart = () => {
  /**
   * @param {number} numDay  the number of the day in the week
   * @returns {string}
   */
  function handleFormatTick(numDay) {
    const days = ["L", "M", "M", "J", "V", "S", "D"];

    switch (numDay) {
      case 1:
        return days[0];
      case 2:
        return days[1];
      case 3:
        return days[2];
      case 4:
        return days[3];
      case 5:
        return days[4];
      case 6:
        return days[5];
      case 7:
        return days[6];
    }
  }

  return (
    <div className="linechart">
      <p className="linechart__title">Durée moyenne des sessions</p>
      <ResponsiveContainer
        width="100%"
        height={263}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <LineChart
          data={Data.sessions}
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
          <YAxis hide padding={{ top: 70, bottom: 0 }} />
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

export default GraphLineChart;
