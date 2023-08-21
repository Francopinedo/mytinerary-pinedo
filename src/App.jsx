import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Layout from "./layouts/layout";
import Main from "./components/Main";
import Cities from "./pages/cities";



const router = createBrowserRouter([
  {path: '/' ,element: <Layout/>,
children: [
{path: '/', element: <Main/>}
]
  },
  {path: '/cities' ,element: <Layout/>,
children: [
{path: '/cities', element: <Cities/>}
]
  }
])



function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
