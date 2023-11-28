import axios from 'axios';

const rootEP = process.env.REACT_APP_ROOTAPI;
const userEP = rootEP + "/users";

export const postAdminUser = async(obj) =>{
    try {
        const { data } = await axios.post(userEP + "/admin-user", obj);
        return data;
    } catch (error) {
        return {
            status: 'error',
            message: error.message
        }
    }
}