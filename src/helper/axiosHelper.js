import axios from 'axios';

const rootEP = process.env.REACT_APP_ROOTAPI;
const userEP = rootEP + "/users";

const axiosProcessor = async (obj) => {
    try {
        const { data } = await axios(obj)
        return data;
    } catch (error) {
        return {
            status: 'error',
            message: error.message
        }
    }
}

export const postAdminUser = async (data) => {

    return axiosProcessor({
        method: 'post',
        url: userEP + "/admin-user",
        data,
    });
}

export const loginUser = async (data) => {
    return axiosProcessor({
        method: 'post',
        url: userEP + "/login",
        data,
    });
}