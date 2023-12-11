import {configureStore} from '@reduxjs/toolkit';
import userReducer from './pages/user_signup/userSlice';
import bookReducer from './component/books/bookSlice';

const store = configureStore({
    reducer: {
        adminInfo: userReducer,
        bookInfo: bookReducer,
    }
})

export default store;