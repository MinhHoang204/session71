import countReducer from "./reducers/countReducer";
import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./reducers/todoListReducer";
const store = configureStore({
    reducer:{
        countReducer,
        todoListReducer
    }
})
export default store;