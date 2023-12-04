import axios from 'axios';

const rootEP = process.env.REACT_APP_ROOTAPI;
const userEP = rootEP + "/users";

const getAccessJWT = () => {
    return sessionStorage.getItem('accessJWT') 
}

const axiosProcessor = async (obj) => {
    if (obj.isPrivate){
        obj.headers = {
            Authorization: getAccessJWT(),
        }
    }
    
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

//=====user api calls
export const loginUser = async (data) => {
    return axiosProcessor({
        method: 'post',
        url: userEP + "/login",
        data,
    });
}

// ============ get users
export const getUser = async () => {
    return axiosProcessor({
        method: 'get',
        url: userEP,
        isPrivate: true,
    });
}