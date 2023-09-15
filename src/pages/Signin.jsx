import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import {useDispatch, useSelector} from 'react-redux'
import citiesActions from '../store/actions/cities';
import store from '../store/store';
import citiesReducer from '../store/reducers/cities';
import Signin from '../components/signin';

function SignIn() {

  return (
    <>
    
   <Signin/>
    </>
  );
}

export default SignIn;
