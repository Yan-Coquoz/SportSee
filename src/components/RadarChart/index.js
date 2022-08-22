/* eslint-disable no-unused-vars */
import React from "react";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";
import "./style.scss";

const data = {
  userId: 12,
  kind: {
    1: "cardio",
    2: "energy",
    3: "endurance",
    4: "strength",
    5: "speed",
    6: "intensity",
  },
  data: [
    {
      value: 80,
      kind: 1,
    },
    {
      value: 120,
      kind: 2,
    },
    {
      value: 140,
      kind: 3,
    },
    {
      value: 50,
      kind: 4,
    },
    {
      value: 200,
      kind: 5,
    },
    {
      value: 90,
      kind: 6,
    },
  ],
};

const GraphRadarChart = () => {
  /**
   * @param {object} obj retour de l'API
   * @returns {arrayOfObject}
   */
  function reFormatDatas(obj) {
    return obj.data.map((nbrKind, key) => {
      if (Object.keys(obj.kind)[key] == nbrKind.kind) {
        const frenchData = englishToFrench(data.kind[key + 1]);

        nbrKind.kind = fromLowerToUpperCase(frenchData);
      }

      return nbrKind;
    });
  }
  function fromLowerToUpperCase(str) {
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
  }
  function englishToFrench(str) {
    switch (str) {
      case "energy":
        return "energie";
      case "strength":
        return "force";
      case "speed":
        return "vitesse";
      case "intensity":
        return "intensité";
      case "cardio":
        return "cardio";
      case "endurance":
        return "endurance";
    }
  }

  const datas = reFormatDatas(data);

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
            wrapperStyle={{ magin: "2rem" }}
          />
          <Radar dataKey="value" stroke="red" fill="red" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphRadarChart;
