import {configureStore} from '@reduxjs/toolkit';
import userReducer from './pages/user_signup/userSlice';
import bookReducer from './component/books/bookSlice';
import burrowReducer from './component/burrowHistory/burrowSlice';
import systemReducer from './system-state/systemSlice';

const store = configureStore({
    reducer: {
        userInfo: userReducer,
        bookInfo: bookReducer,
        burrowInfo: burrowReducer,
        systemInfo: systemReducer,

    }
})

export default store;