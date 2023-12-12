import { toast } from "react-toastify"
import { postBurrow } from "../../helper/axiosHelper";
import { getABookAction } from "../books/BookAction";

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