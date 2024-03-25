//store-->modules-->home

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getHomeListData from "../../services/modules/home";

export const fetchHomeListData = createAsyncThunk("fetchHomeListData", async (dispatch) => {
  try{
    const res = await getHomeListData();
    return res;
  } catch (err){
    console.log(err);
  }
})


const homeSlice = createSlice({
  name: "home",
  initialState: {
    roomList: [],
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomeListData.fulfilled, (state, { payload }) => {
      state.roomList = payload;
    })
  }
})


export default homeSlice.reducer;