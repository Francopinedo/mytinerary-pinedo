import { createReducer } from "@reduxjs/toolkit";
import User from "../actions/cities";
import userActions from "../actions/user";

const initialState = {
  user: [
    {
      name: "",
      lastname: "",
      email: "",
      password: "",
      img: "",
      country: "",
     
    },
  ],
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(userActions.sign_in.fulfilled, (state, action) => {
    return { user: action.payload.user };
    
  })
 
});

export default userReducer;