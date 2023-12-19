import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    book: [],
    selectedBooks: {},
    reviews: []
}

const bookSlic = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setBooks: (state, { payload })=>{
            state.book = payload;
        },
        setABook: (state, { payload })=>{
            state.selectedBooks = payload;
        },
        setReviews: (state, { payload }) => {
            state.reviews = payload;
        }
    }
})

const {reducer, actions} = bookSlic;

export const { setBooks, setABook, setReviews } = actions;
export default reducer