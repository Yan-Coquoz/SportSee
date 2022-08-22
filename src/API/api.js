import axios from "axios";

const baseUrl = "http://localhost:5000/user/";

/**
 * It takes an id as an argument, makes a request to the API, and returns the data.
 * @param {String} id - The id of the user you want to get the data for.
 * @returns {Promise} The response.data.data is being returned.
 * @throws {Error} message error
 */
export const userBase = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}${id}`);
    return response.data.data;
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * It takes in a user id and returns the user's activity
 * @param {String} id - The user's id
 * @returns {Promise} An array of objects.
 * @throws {Error} message error
 */
export const userActivity = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}${id}/activity`);
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * It takes in a user id, makes a get request to the server, and returns the average session time of
 * the user.
 * @param {String} id - user id
 * @returns {Promise} The average session time for a user.
 * @throws {Error} message error
 */
export const userAverageSession = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}${id}/average-sessions`);
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * It takes in a user id, makes a get request to the server, and returns the data from the server.
 * @param id - user id
 * @returns {Promise} An array of objects.
 * @throws {Error} message error
 */
export const userPerformance = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}${id}/performance`);
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    throw new Error(error);
  }
};
