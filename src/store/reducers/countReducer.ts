import { createSlice } from "@reduxjs/toolkit";

const countReducer = createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
        // trong reducers sẽ chứa các action
        increase:(state: any)=>{
            state.count+=1
        },
        decrease:(state: any, action)=>{
            state.count-1
        }
    }
})
// đi xuất ra các action bằng cách dùng destructoring
export const {increase, decrease} = countReducer.actions;
// xuất ra hàm reducer
export default countReducer.reducer;