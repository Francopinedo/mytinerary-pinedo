import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Index from "./pages/index";
import Cities from "./pages/cities";

const router = createBrowserRouter([
  {path:'/index',element: <Index/>
},
{path:'/cities',element: <Cities/>
}
])



function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
