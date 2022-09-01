// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAllDatas, getAllDatasMocked } from "../../API/api";

import User from "../../Models/User";
import Perf from "../../Models/Perf";
import Session from "../../Models/Session";
import Average from "../../Models/Average";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import StatCard from "../../components/StatCard";
import GraphBarChart from "../../components/BarChart";
import GraphLineChart from "../../components/LineChart";
import GraphRadarChart from "../../components/RadarChart";
import GraphRadialChart from "../../components/RadialChart";

import "./style.scss";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [firstFetch, setFirstFetch] = useState(false);
  const [isData, setIsData] = useState(false);
  const [getError, setGetError] = useState(false);
  const [scores, setScores] = useState({});
  const [getUserDatas, setGetUserDatas] = useState(null);
  const [getActivityDatas, setGetActivityDatas] = useState(null);
  const [getAverageDatas, setGetAverageDatas] = useState(null);
  const [getPerfDatas, setGetPerfDatas] = useState(null);

  const getId = useParams();
  const navigate = useNavigate();

  if (Object.keys(getId).length !== 0) {
    localStorage.setItem("id", getId.id);
    useEffect(() => {
      async function getUserData() {
        try {
          if (!firstFetch) {
            setFirstFetch(true);

            const userDatas = await getAllDatas(getId.id);

            const user = new User(userDatas.user.data);
            const perf = new Perf(userDatas.perf.data);
            const average = new Average(userDatas.average.data);
            const session = new Session(userDatas.activity.data);

            // Placement of data in the useState
            setGetUserDatas(user.data);
            setGetActivityDatas(session.data);
            setGetPerfDatas(perf.data);
            setGetAverageDatas(average.data);

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
  } else {
    // Mocked Data
    localStorage.removeItem("id");
    useEffect(() => {
      async function getMockedDatas() {
        try {
          if (!firstFetch) {
            const userDatas = await getAllDatasMocked();

            const user = new User(userDatas.user);
            const perf = new Perf(userDatas.perf);
            const average = new Average(userDatas.average);
            const session = new Session(userDatas.session);

            // Placement of data in the useState
            setGetUserDatas(user.props);
            setGetPerfDatas(perf.props);
            setGetAverageDatas(average.props);
            setGetActivityDatas(session.props.sessions);

            setGetError(false);
            setIsData(true);
          }
        } catch (error) {
          console.log(error);
          setGetError(true);
          setFirstFetch(false);
          setIsData(false);
        }
      }
      getMockedDatas();
    }, []);
  }

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
      const launchError = setTimeout(() => {
        // API server is down
        if (localStorage.getItem("error") === "Network Error") {
          localStorage.removeItem("error");
          navigate("/error");
          console.log("Error 503 Service Unavailable");
        }
      }, 900);
      return () => clearTimeout(launchError);
    }
  }, [isData, scores, localStorage.getItem("error")]);

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
              <GraphBarChart sessions={getActivityDatas} />
              <div className="dashboard__bloc-graphic__bloc-otherchart">
                <GraphLineChart average={getAverageDatas} />
                <GraphRadarChart perf={getPerfDatas} />
                <GraphRadialChart score={scores} />
              </div>
            </div>
            <div className="dashboard__bloc-graphic__statcard">
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
