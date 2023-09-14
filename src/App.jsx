import * as React from "react";
import ReactDOM from "react-dom";
import {useDispatch, useSelector} from 'react-redux'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import './App.css'
import Layout from "./layouts/layout";
import Main from "./components/Main";
import Cities from "./pages/Cities";
import CityDetails from "./pages/CityDetails";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import userActions from "./store/actions/user";

function App() {
  const dispatch= useDispatch()
  React.useEffect(()=>{
    //dispatch(userActions.authenticate())
  },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route path="/" element={<Main />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/city/:id" element={<CityDetails />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
