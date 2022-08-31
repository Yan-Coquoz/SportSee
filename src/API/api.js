// @ts-nocheck
import axios from "axios";
const baseUrl = "http://localhost:5000/user/";

/**
 * It takes an id as an argument, and returns a promise that resolves to an object containing the data
 * from all four endpoints
 *
 * @param   {Number}  id  The user id
 *
 * @return  {Promise} Return user datas
 */
export const getAllDatas = async (id) => {
  const endPoints = [
    `${baseUrl}${id}`,
    `${baseUrl}${id}/activity`,
    `${baseUrl}${id}/average-sessions`,
    `${baseUrl}${id}/performance`,
  ];
  return axios
    .all(endPoints.map((endPoint) => axios.get(endPoint)))
    .then(
      axios.spread((user, activity, average, perf) => {
        JSON.stringify(user);
        JSON.stringify(activity);
        JSON.stringify(average);
        JSON.stringify(perf);
        return { user, activity, average, perf };
      }),
    )
    .catch((error) => {
      localStorage.setItem("error", error.message);
      throw new Error(error);
    });
};

/* A mocked data for the app. */
const datas = "/mockeddatas.json";
export const getAllDatasMocked = () => {
  return axios.get(datas).then((response) => response.data);
};
