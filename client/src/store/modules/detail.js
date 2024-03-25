import { createSlice } from "@reduxjs/toolkit";

const detailSlice=createSlice({
  name:"detail",
  initialState:{
    item:{},
  },
  reducers:{
    changeItemData:(state,{payload})=>{
      console.log("看这个是reducer",payload)
      state.item=payload;
      console.log("看这个是state》item",state.item)
    }
  }
})

export const {changeItemData}=detailSlice.actions;

export default detailSlice.reducer;