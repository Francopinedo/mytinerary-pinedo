import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import {useDispatch, useSelector} from 'react-redux'
import citiesActions from '../store/actions/cities';
import store from '../store/store';
import citiesReducer from '../store/reducers/cities';
import Signin from '../components/signin';

function SignIn() {
//const emailInputRef = useRef();
//const passwordInputRef = useRef()
const handlerSignIn =() =>{
  axios.post("http://localhost:3000/api/user/login",
  {
    email:emailInputRef.current.value,
    password: passwordInputRef.current.value
  })
  .then((respone)=>{
    console.log(response.data.token)
    localStorage.setItem("token",response.data.token)
    let token  = localStorage.getItem("token")
  })
}

  return (
    <>
    
   <Signin/>
    </>
  );
}

export default SignIn;
