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
        return { user, activity, average, perf };
      }),
    )
    .catch((error) => {
      throw new Error(error);
    });
};
