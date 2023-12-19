import { toast } from "react-toastify"
import { deleteBook, deleteReview, fetchReview, getBooks, postBook, postReview, updateBook, updateReview } from "../../helper/axiosHelper"
import { setBooks, setABook, setReviews } from './bookSlice';
import { setShowModal } from "../../system-state/systemSlice";
import { fetchBurrowAction } from "../burrowHistory/BurrowAction";

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

export const updateBookAction = (bookObj) => async(dispatch)=>{
    const pending = updateBook(bookObj);
    toast.promise(pending, {
        pending: "please wait...",
    })
    const {status, message} = await pending;
    toast[status](message);

    if(status === 'success'){
        // call the function that fetches all the books and updates the store
        dispatch(getAllBooksAction());
        dispatch(setABook({}));
    }
}
export const deleteBookAction = (_id) => async(dispatch)=>{
    const pending = deleteBook(_id);
    toast.promise(pending, {
        pending: "please wait...",
    })
    const {status, message} = await pending
    toast[status](message);

    if(status === 'success'){
        // call the function that fetches all the books and updates the store
        dispatch(getAllBooksAction());
        return true;
    }
}

// =================reviewAcion
export const postNewReviewAction = (bookObj) => async(dispatch)=>{
    const pending = postReview(bookObj);
    
    toast.promise(pending, {
        pending: "please wait...",
    })

    const {status, message} = await pending
    toast[status](message);

    if(status === 'success'){
        dispatch(setShowModal(false));

        //refetch all burrows
        dispatch(fetchBurrowAction());
        // call the function that fetches all the books and updates the store
        // dispatch(getAllReviewAction())
    }
}
export const updateReviewAction = (reviewObj) => async(dispatch)=>{
    const pending = updateReview(reviewObj);
    
    toast.promise(pending, {
        pending: "please wait...",
    })

    const {status, message} = await pending
    toast[status](message);

    if(status === 'success'){
        //refetch all burrows
        dispatch(fetchReviewAction());
    }
}
export const deleteReviewAction = (_id) => async(dispatch)=>{
    const pending = deleteReview(_id);
    
    toast.promise(pending, {
        pending: "please wait...",
    })

    const {status, message} = await pending
    toast[status](message);

    if(status === 'success'){
        //refetch all burrows
        dispatch(fetchReviewAction());
    }
}

export const fetchReviewAction = () => async(dispatch)=>{

    const {status, message, reviews} = await fetchReview();
    

    if(status === 'success'){
        dispatch(setReviews(reviews))
    }
}

