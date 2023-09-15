import { createReducer } from "@reduxjs/toolkit";
import User from "../actions/cities";
import userActions from "../actions/user";

const initialState = {
  user: 
    {
      name: "",
      lastname: "",
      email: "",
      password: "",
      img: "",
      country: "",
     
    },
  
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(userActions.sign_in.fulfilled, (state, action) => {
    return { user: action.payload.user };
  })
 .addCase(userActions.authenticate.fulfilled,(state,action)=>{
  return {user:action.payload.user}
 })
 .addCase(userActions.sign_out.fulfilled,(state,action)=>{
  return { user: 
    {
      name: "",
      lastname: "",
      email: "",
      password: "",
      img: "",
      country: "",
     
    }}
 })
});

export default userReducer;