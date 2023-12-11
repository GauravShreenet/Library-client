import { toast } from "react-toastify"
import { getBooks, postBook } from "../../helper/axiosHelper"
import { setBooks, setABook } from './bookSlice';

export const getAllBooksAction = () => async (dispatch) => {
    const {status, message, books} = await getBooks()
    if(status === 'success') {
        dispatch(setBooks(books))
    }
}

export const getABookAction = (_id) => async (dispatch) => {
    const {status, message, books} = await getBooks(_id)
    if(status === 'success') {
        dispatch(setABook(books))
    }
}

export const postNewBookAction = (bookObj) => async(dispatch)=>{
    const pending = postBook(bookObj);
    toast.promise(pending, {
        pending: "please wait...",
    })
    const {status, message} = await postBook(bookObj)
    toast[status](message);

    if(status === 'success'){
        // call the function that fetches all the books and updates the store
        dispatch(getAllBooksAction())
    }
}

