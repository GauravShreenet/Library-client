import axios from 'axios';

const rootEP = process.env.REACT_APP_ROOTAPI;
const userEP = rootEP + "/users";
const bookEP = rootEP + "/books";
const burrowEP = rootEP + "/burrows";
const reviewEP = rootEP + "/reviews";

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
        console.log(error)

        const errorMsg = error?.response?.data?.message
        if(errorMsg?.includes("jwt expired")){
            // get new access token

            const { accessJWT } = await getNewAccessJwt();
            if(accessJWT){
                sessionStorage.setItem("accessJWT", accessJWT)
                return axiosProcessor(obj);
            }
        }
        return {
            status: 'error',
            message: error.message
        }
    }
}

export const postUsers = async (role, data) => {
    const url = role === 'admin' ? userEP + "/admin-user" : userEP
    return axiosProcessor({
        method: 'post',
        url,
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

export const logOutUser = async (data) => {
    return axiosProcessor({
        method: 'post',
        url: userEP + "/logout",
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
export const getAllUsers = async () => {
    return axiosProcessor({
        method: 'get',
        url: userEP + "/all-users",
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

// ================== book api
export const postBook = async (data) => {

    return axiosProcessor({
        method: 'post',
        url: bookEP,
        data,
        isPrivate: true,
    });
}

export const getBooks = async (_id) => {

    return axiosProcessor({
        method: 'get',
        url: _id ? bookEP + "/" + _id : bookEP,
        isPrivate: true,
    });
}

export const updateBook = async (data) => {

    return axiosProcessor({
        method: 'put',
        url: bookEP,
        data,
        isPrivate: true,
    });
}

export const deleteBook = async (_id) => {

    return axiosProcessor({
        method: 'delete',
        url: bookEP + "/" + _id,
        isPrivate: true,
    });
}

// ============ burrowHistory
export const postBurrow = async (data) => {

    return axiosProcessor({
        method: 'post',
        url: burrowEP,
        data,
        isPrivate: true,
    });
}

export const fetchBurrows = async () => {

    return axiosProcessor({
        method: 'get',
        url: burrowEP,
        isPrivate: true,
    });
}

export const returnBurrowedBook = async (_id) => {

    return axiosProcessor({
        method: 'patch',
        url: burrowEP + "/" + _id,
        isPrivate: true,
    });
}

// ============ reviewHistory
export const postReview = async (data) => {

    return axiosProcessor({
        method: 'post',
        url: reviewEP,
        data,
        isPrivate: true,
    });
}

export const fetchReview = async (data) => {
    //check if admin requested or public
    return axiosProcessor({
        method: 'get',
        url: reviewEP,
        // isPrivate: true,
    });
}

// ============ reviewHistory
export const updateReview = async ({_id, ...data}) => {

    return axiosProcessor({
        method: 'patch',
        url: reviewEP + '/' + _id,
        data,
        isPrivate: true,
    });
}

export const deleteReview = async (_id) => {

    return axiosProcessor({
        method: 'delete',
        url: reviewEP + '/' + _id,
        isPrivate: true,
    });
}

