import axios from 'axios';

const rootEP = process.env.REACT_APP_ROOTAPI;
const userEP = rootEP + "/users";

const getAccessJWT = () => {
    const token = sessionStorage.getItem('accessJWT') 
    return token;
}

const getRefreshJWT = () => {
    return localStorage.getItem('refreshJWT') 
}

const axiosProcessor = async (obj) => {
    const {isPrivate, refreshToken} = obj
    if (isPrivate){
        obj.headers = {
            Authorization: refreshToken ? getRefreshJWT() : getAccessJWT(),
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

export const getNewAccessJwt = async () => {
    return axiosProcessor({
        method: 'get',
        url: userEP + "/get-accessjwt",
        isPrivate: true,
        refreshToken: true,
    });
}

