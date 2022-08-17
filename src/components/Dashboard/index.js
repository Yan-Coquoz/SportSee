import React, { useEffect, useState } from "react";
import { userBase } from "../../API/api";
import Header from "../Header";
import Loader from "../Loader";
import StatCard from "../StatCard";
import "./style.scss";

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [firstFetch, setFirstFetch] = useState(false);
    const [isData, setIsData] = useState(false);
    const [getError, setGetError] = useState(false);
    const [getUserDatas, setGetUserDatas] = useState(null);

    useEffect(() => {
        async function getUserData() {
            try {
                if (!firstFetch) {
                    setFirstFetch(true);
                    const userDatas = await userBase(12);
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
    console.log(getUserDatas);
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
                        Container Graphic
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
                                countValue={
                                    getUserDatas.keyData.carbohydrateCount
                                }
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
