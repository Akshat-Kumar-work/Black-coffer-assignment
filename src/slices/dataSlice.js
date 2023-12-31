import { createSlice } from "@reduxjs/toolkit";


const initialState  = {
    currentData :[]
}

const dataSlice = createSlice({
    name :"DataSlice",
    initialState,
    reducers:{
        setCurrentData: (state , action )=>{
            state.currentData = action.payload
        }
    }
})

export const {  setCurrentData} = dataSlice.actions;

export default dataSlice.reducer;
