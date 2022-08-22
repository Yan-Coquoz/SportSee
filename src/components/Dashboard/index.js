import React, { useEffect, useState } from "react";
import { userBase } from "../../API/api";
import Header from "../Header";
import Loader from "../Loader";
import StatCard from "../StatCard";
import GraphBarChart from "../BarChart";
import GraphLineChart from "../LineChart";
import GraphRadarChart from "../RadarChart";
import "./style.scss";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [firstFetch, setFirstFetch] = useState(false);
  const [isData, setIsData] = useState(false);
  const [getError, setGetError] = useState(false);

  const [getUserDatas, setGetUserDatas] = useState(null);
  const getId = "18";

  useEffect(() => {
    async function getUserData() {
      try {
        if (!firstFetch) {
          setFirstFetch(true);
          const userDatas = await userBase(getId);
          setGetUserDatas(userDatas);
          setGetError(false);
          setIsData(true);
        }
      } catch (error) {
        setGetError(true);
        setFirstFetch(false);
        setIsData(false);
      }
    }
    getUserData();
  }, []);

  useEffect(() => {
    if (!getError && isData) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [isData]);

  return (
    <div className="dashboard">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="dashboard__bloc-header">
            <Header name={getUserDatas.userInfos.firstName} />
          </div>
          <div className="dashboard__bloc-graphic">
            <div className="dashboard__bloc-graphic__bloc-chart">
              <GraphBarChart />
              <div className="dashboard__bloc-graphic__bloc-otherchart">
                <GraphLineChart />
                <GraphRadarChart />
                <div
                  style={{
                    border: "1px solid black",
                    width: "258px",
                    height: "253px",
                  }}
                >
                  PieChart
                </div>
              </div>
            </div>
            <div className="dashboard__bloc-graphic__statcard">
              <StatCard
                type="calorie"
                countValue={getUserDatas.keyData.calorieCount}
              />
              <StatCard
                type="protein"
                countValue={getUserDatas.keyData.proteinCount}
              />
              <StatCard
                type="glucide"
                countValue={getUserDatas.keyData.carbohydrateCount}
              />
              <StatCard
                type="lipide"
                countValue={getUserDatas.keyData.lipidCount}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
