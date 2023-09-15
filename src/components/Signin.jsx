import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { GoogleLogin } from '@react-oauth/google';
import jwtdecode from "jwt-decode";

  export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
   
      
      const body = {
        email: email,
        password: password,
      };
      console.log("1::::"+body.email)
      loginWithEmail(body);
    };
  
    const loginWithEmail = async (data) => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/user/login",
          data
        );
        console.log("2::::"+response.data)
        if (response && response.data) {
          console.log("Login successful", response.data);
          localStorage.setItem("token", response.data.token);
          // Login
          //Add btn Logout
        } else {
          console.error("Login failed: Response data is missing");
        }
      } catch (error) {
        console.error(
          "Login failed",
          error.response ? error.response.data : error.message
        );
      }
    };
  
    const signInWithGoogle = (credentialResponse) => {
      const userData = jwtdecode(credentialResponse.credential);
          
      const body = {
        email: userData.email,
        password: userData.family_name,
      };
  
      loginWithGoogle(body);
    };
  
    const loginWithGoogle = async (data) => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/user/login",
          data
        );
        if (response && response.data) {
          console.log("Login with Google successful", response.data);
          localStorage.setItem("token", response.data.token);
          // Login
          //Add btn Logout
        } else {
          console.error("Login with Google failed: Response data is missing");
        }
      } catch (error) {
        console.error(
          "Login with Google failed",
          error.response ? error.response.data : error.message
        );
      }
    };
  return (

    <form onSubmit={handleSubmit}>
    <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center ">
      <div class="max-w-screen-xl m-0 sm:m-10    sm:rounded-lg flex justify-center flex-1">
        <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div class="mt-12 flex flex-col items-center mt-40">
            <h1 class="text-2xl xl:text-3xl font-extrabold">Sign in</h1>
            <div class="w-full flex-1 mt-8">
              <div class="flex flex-col items-center">
              <div>
                    <GoogleLogin
                    text="Sign_In"
                      class="mt-5 tracking-wide font-semibold   w-full py-4  hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                      onSuccess={signInWithGoogle}
                      onError={() => {
                        console.log("Login Failed");
                      }}
                    />
                  </div>
                {/* <button class="mt-5 tracking-wide font-semibold  text-white w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <div class=" p-2 rounded-full">
                    <svg class="w-4" viewBox="0 0 533.5 544.3">
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04"
                      />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      />
                    </svg>
                  </div>
                  Sign in with Google
                </button> */}
              </div>
              <div class="my-12 border-b text-center">
                <div class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium  transform translate-y-1/2">
                  Sign in with e-mail
                </div>
              </div>

              <div class="mx-auto max-w-xs">
                <input
                  class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  name="email"  
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                
                
                />
                <input
                  class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  name="password"
                  placeholder="Password"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" class="mt-5 tracking-wide font-semibold bg-black text-white w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  Sign-In
                </button>
                
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1  text-center hidden lg:flex">
          <div className="m-12 xl:m-16 w-full h-full flex items-center justify-center bg-contain bg-center bg-repeat">
            <img className="img-form" src="../public/cityX.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    </form>
  );
}
