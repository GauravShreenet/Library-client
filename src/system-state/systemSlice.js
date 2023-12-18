import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    showModal: false,
    
}

const systemSlic = createSlice({
    name: 'system',
    initialState,
    reducers: {
        setShowModal: (state, { payload })=>{
            state.showModal = payload;
        },
    }
})

const {reducer, actions} = systemSlic;

export const { setShowModal } = actions;
export default reducer