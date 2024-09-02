import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import Home from './pages/Home';
import MakeTen from './pages/MakeTen';

/*
import MakeTenPrivacyPolicy from "./pages/MakeTenPrivacyPolicy";

const router = createHashRouter([
  
  {
    path: "/",
    element: <Home/>,
    errorElement:<div>TEST</div>,
  },

  {
    path: "make-ten",
    element: <MakeTen/>,
  },

  {
    path: 'make-ten/privacy-policy',
    element: <MakeTenPrivacyPolicy/>
  }

]);
*/

const router = createHashRouter([
  
  {
    path: "/",
    element: <Home/>,
    errorElement:<Home/>,
  },

  {
    path: "make-ten",
    element: <MakeTen/>,
  },

]);

/*

*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();