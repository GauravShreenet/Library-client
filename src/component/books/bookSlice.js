import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    book: []
}

const bookSlic = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setBooks: (state, { payload })=>{
            state.books = payload;
        }
    }
})

const {reducer, actions} = bookSlic;

export const { setBooks } = actions;
export default reducer