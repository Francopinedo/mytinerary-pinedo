import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Index from "./pages/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index></Index>,
  },
  {
    path: "/",
    element: <Index></Index>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

function App() {
  return (
    <>
     <Index/>
    </>
  )
}

export default App
