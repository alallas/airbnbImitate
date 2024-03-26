import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import getDetailData from "../../services/modules/detail";

export const fetchDetailData = createAsyncThunk("fetchDetailData",async(id) => {
  try{
    const [result] = await getDetailData(id);
    return result;
  } catch (err){
    console.log(err);
  }
})

const detailSlice=createSlice({
  name:"detail",
  initialState:{
    item:{},
  },
  reducers:{
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchDetailData.fulfilled,(state,{payload})=>{
      state.item=payload;
    })
  }
})


export default detailSlice.reducer;