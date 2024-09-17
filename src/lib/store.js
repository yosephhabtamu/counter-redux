import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";

const store = configureStore({
    reducer:{
        counterReducer: counterReducer
    }
})

export default store;
