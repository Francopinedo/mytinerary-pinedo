import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import jwtdecode from "jwt-decode";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    profilePicture: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/register",
        formData
      );
      if (response && response.data) {
        console.log("Registration successful", response.data);
      } else {
        console.error("Registration failed: Response data is missing");
      }
    } catch (error) {
      console.error(
        "Registration failed",
        error.response ? error.response.data : error.message
      );
      
    }
  };

  const signUpWithGoogle = (credentialResponse) => {
    const dataUser = jwtdecode(credentialResponse.credential);
    console.log(dataUser);

    const body = {
      name: dataUser.given_name,
      lastName: dataUser.family_name,
      email: dataUser.email,
      password: dataUser.family_name,
      profilePicture: dataUser.picture,
      country: "dataUser.locale",
    };

    registerWithGoogle(body);
  };

  const registerWithGoogle = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/register",
        data
      );
      if (response && response.data) {
        console.log("Registration successful", response.data);
      } else {
        console.error("Registration failed: Response data is missing");
      }
    } catch (error) {
      console.error(
        "Registration failed",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div class="mt-12 flex flex-col items-center">
              <h1 class="text-2xl xl:text-3xl font-extrabold">Sign Up</h1>
                  <div class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium  transform translate-y-1/2">
                    Sign up with Google
                  </div>
              <div class="w-full flex-1 mt-8">
                <div class="flex flex-col items-center">
                  <div>
                    <GoogleLogin
                    text="Sign_Up"
                      class="mt-5 tracking-wide font-semibold   w-full py-4  hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                      onSuccess={signUpWithGoogle}
                      onError={() => {
                        console.log("Login Failed");
                      }}
                    />
                  </div>
                </div>
                <div class="my-12 border-b text-center">
                  <div class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium  transform translate-y-1/2">
                    Sign up with e-mail
                  </div>
                </div>

                <div class="mx-auto max-w-xs">
                  <input
                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <input
                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 mb-5"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                  <input
                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <input
                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 mb-5"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <input
                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    name="imageprofile"
                    placeholder="Profile"
                    value={formData.profilePicture}
                    onChange={handleInputChange}
                  />
                  <input
                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 mb-5"
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleInputChange}
                  />
                  <button
                    type="submit"
                    class="mt-5 tracking-wide font-semibold  bg-black text-white w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    Sign-Up
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
