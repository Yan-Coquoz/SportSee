import React, { useEffect, useState } from "react";
import { userBase } from "../../API/api";
import Header from "../Header";
import Loader from "../Loader";
import StatCard from "../StatCard";
import GraphBarChart from "../BarChart";
import GraphLineChart from "../LineChart";
import GraphRadarChart from "../RadarChart";
import GraphRadialChart from "../RadialChart";
import "./style.scss";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [firstFetch, setFirstFetch] = useState(false);
  const [isData, setIsData] = useState(false);
  const [getError, setGetError] = useState(false);
  const [scores, setScores] = useState({});
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
      if (getUserDatas !== null) {
        setScores(
          getUserDatas.todayScore
            ? getUserDatas.todayScore
            : getUserDatas.score,
        );
      }
    } else {
      setIsLoading(true);
    }
  }, [isData, scores]);

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
                <GraphRadialChart score={scores} />
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
