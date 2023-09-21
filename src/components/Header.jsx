import React from "react";
import { Link as Anchor } from "react-router-dom";
export default function Header({ isLoggedIn, handleLogout }) {
  return (
    <>
      <div className="shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div>
              <img
                src="../public/logo.jpg"
                alt="Logo"
                className="object-cover h-10 w-15"
              />
            </div>
            <div className="hidden sm:flex sm:items-center"></div>
            <h2 className="ml-4 text-gray-800 text-2xl font-semibold border px-5 py-2 rounded-lg">
              My Tinerary
            </h2>
            <div className="hidden sm:flex sm:items-center nav">
              <Anchor
                className="ml-4 text-gray-800 text-2xl font-semibold border px-5 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600"
                to="/"
              >
                Home
              </Anchor>
              <Anchor
                className="ml-4 text-gray-800 text-2xl font-semibold border px-5 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600"
                to="/cities"
              >
                Cities
              </Anchor>
              {isLoggedIn ? (
                <>
                  <Anchor
                    onClick={handleLogout}
                    to="/"
                    className="ml-4 text-gray-800 text-2xl font-semibold border px-5 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600"
                  >
                    Log Out
                  </Anchor>
                </>
              ) : (
                <>
                  <Anchor
                    className="ml-4 text-gray-800 text-2xl font-semibold border px-5 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600"
                    to="/sign-in"
                  >
                    Sign In
                  </Anchor>
                  <Anchor
                    className="ml-4 text-gray-800 text-2xl font-semibold border px-5 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600"
                    to="/sign-up"
                  >
                    Sign Up
                  </Anchor>
                </>
              )}
            </div>
            <div className="sm:hidden cursor-pointer"></div>
          </div>
          <div className="block sm:hidden bg-white border-t-2 py-2">
            <div className="flex flex-col">
              <Anchor
                className="ml-4 text-gray-800 text-2xl font-semibold border px-5 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600"
                to="/"
              >
                Home
              </Anchor>
              <Anchor
                className="ml-4 text-gray-800 text-2xl font-semibold border px-5 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600"
                to="/cities"
              >
                Cities
              </Anchor>
              <Anchor
                className="ml-4 text-gray-800 text-2xl font-semibold border px-5 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600"
                to="/sign-in"
              >
                Sign In
              </Anchor>
              <Anchor
                className="ml-4 text-gray-800 text-2xl font-semibold border px-5 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600"
                to="/sign-up"
              >
                Sign Up
              </Anchor>
              <div className="flex justify-between items-center border-t-2 pt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
