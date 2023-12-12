import {configureStore} from '@reduxjs/toolkit';
import userReducer from './pages/user_signup/userSlice';
import bookReducer from './component/books/bookSlice';

const store = configureStore({
    reducer: {
        userInfo: userReducer,
        bookInfo: bookReducer,
    }
})

export default store;