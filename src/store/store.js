import { configureStore } from "@reduxjs/toolkit";
import dataSliceReducer from "../slices/dataSlice";



const Store = configureStore ({
    reducer:{
        dataSlice:dataSliceReducer
    }
});

export default Store;