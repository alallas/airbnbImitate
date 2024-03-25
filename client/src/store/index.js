import { configureStore } from "@reduxjs/toolkit";
import detailReducer from "./modules/detail";
import homeReducer from "./modules/home";

const store = configureStore({
  reducer: {
    home: homeReducer,
    detail: detailReducer,
  }
})

export default store;