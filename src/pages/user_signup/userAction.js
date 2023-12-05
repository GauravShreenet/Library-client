import { getNewAccessJwt, getUser, logOutUser } from "../../helper/axiosHelper"
import {setUser} from './userSlice';

export const getUserAction = () => async(dispatch) => {
    const {status, message, user} = await getUser();

    if (status === "success"){
        //send user to the store
        dispatch(setUser(user));
        
    }
}

//let's login user automatically
export const autoLogin = () => async(dispatch) => {
    //check if we have accessJWT. if so use, get user and mount in the state
    const accessJWT = sessionStorage.getItem("accessJWT")
    

    // if(accessJWT){
    //     return dispatch(getUserAction());
    // }

    const refreshJWT = localStorage.getItem("refreshJWT")
    // if(refreshJWT){
    //     const response = await getNewAccessJwt()
    //     if(response?.accessJWT){
    //         sessionStorage.setItem("accessJWT", response.accessJWT)
    //         dispatch(getUserAction());
    //     }
    // }
    if(!accessJWT && refreshJWT){
        const response = await getNewAccessJwt();
        if(response?.accessJWT) {
            sessionStorage.setItem("accessJWT", response.accessJWT)
            dispatch(getUserAction());
        }
    }

    dispatch(getUserAction());
}

export const logOutAction = (email) => async(dispatch) => {
     // clear the user state
     const accessJWT = sessionStorage.getItem("accessJWT")
     dispatch(setUser({}));

    // clear browser storage
    sessionStorage.removeItem('accessJWT')
    localStorage.removeItem('refreshJWT')
    
    // delete both jwts from server - both table
    await logOutUser({email, accessJWT})

    //redirect to homepage
}