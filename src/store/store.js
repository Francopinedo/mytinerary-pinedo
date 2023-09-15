import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/cities";
import userReducer from "./reducers/user";
const store = configureStore({
  reducer: {
    citiesReducer: citiesReducer, 
    userReducer: userReducer
  },
});

export default store;



