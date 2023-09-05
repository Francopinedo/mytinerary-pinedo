import * as React from "react";
import ReactDOM from "react-dom";
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

function App() {
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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App
