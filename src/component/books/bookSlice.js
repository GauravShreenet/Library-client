import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    book: [],
    selectedBooks: {}
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
    }
})

const {reducer, actions} = bookSlic;

export const { setBooks, setABook } = actions;
export default reducer