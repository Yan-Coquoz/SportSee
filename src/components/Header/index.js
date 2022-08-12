import React, { useEffect, useState } from "react";
import { userBase } from "../../API/api";
import Loader from "../Loader";
import "./style.scss";

const Header = () => {
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
    });

    useEffect(() => {
        if (!getError && isData) {
            setIsLoading(false);
        } else {
            setIsLoading(true);
        }
    }, [isData]);

    return (
        <div className="header-container">
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <h1 className="header-container__accueil">
                        Bonjour {getUserDatas.userInfos.firstName}
                    </h1>
                    <h3 className="header-container__commentaire">
                        Félicitation ! Vous avez explosé vos objectifs hier 👏
                    </h3>
                </>
            )}
        </div>
    );
};

export default Header;
