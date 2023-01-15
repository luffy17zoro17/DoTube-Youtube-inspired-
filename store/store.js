import {configureStore} from "@reduxjs/toolkit";
import NavReducer from "../reducers/NavSlice/NavSlice";
import LeftBarReducer from "../reducers/LeftBarSlice/LeftBarSlice";


export const store = configureStore({
    reducer:{
        navbar:NavReducer,
        leftBar:LeftBarReducer,
       
    }
})