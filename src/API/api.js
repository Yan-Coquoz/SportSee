import axios from "axios";

const baseUrl = "http://localhost:5000/user/";

export const userBase = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}${id}`);
        return response.data.data;
    } catch (error) {
        throw new Error({ message: error });
    }
};

export const userActivity = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}${id}/activity`);
        console.log(response.data);
        return response.data.data;
    } catch (error) {
        throw new Error({ message: error });
    }
};
export const userAverageSession = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}${id}/average-sessions`);
        console.log(response.data);
        return response.data.data;
    } catch (error) {
        throw new Error({ message: error });
    }
};
export const userPerformance = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}${id}/performance`);
        console.log(response.data);
        return response.data.data;
    } catch (error) {
        throw new Error({ message: error });
    }
};
