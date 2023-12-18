import { toast } from "react-toastify"
import { fetchBurrows, postBurrow, returnBurrowedBook } from "../../helper/axiosHelper";
import { getABookAction } from "../books/BookAction";
import { setBurrows } from "./burrowSlice";

export const postBurrowAction = (obj) => async(dispatch) => {
    const pending = postBurrow(obj)
    toast.promise(pending, {
        pending: "Please wait..."
    })
    const {status, message} = await pending;
    toast[status](message);

    if (status === 'success'){
        dispatch(getABookAction(obj.bookId));
    }
}

export const fetchBurrowAction = () => async(dispatch) => {
    
    const {status, message, burrows} = await fetchBurrows();

    if (status === 'success'){
        dispatch(setBurrows(burrows));
    }
}

export const returnedBurrowedBookAction = (_id) => async(dispatch) => {
    const pending = returnBurrowedBook(_id)
    toast.promise(pending, {
        pending: "Please wait..."
    })
    const {status, message} = await pending;
    toast[status](message);

    if (status === 'success'){
        //refetch all the books - check first 

        //refetch all burrow
        dispatch(fetchBurrowAction());
    }
}