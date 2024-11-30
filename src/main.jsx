import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, createBrowserRouter } from "react-router-dom";
import { Home, MostSearched, HowToUse, SolutionPage, About, Contact } from "./index.js";
import { RouterProvider } from "react-router";
import Layout from "./Layout/Layout.jsx";
const systemRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element:  <Home />,
      }
      ,
      {
        path: "/home",
        element:  <Home />,
      },
      {
        path: "/most-searched",
        element:  <MostSearched />,
      },
      {
        path: "/how-to-use",
        element:  <HowToUse />,
      },
      {
        path: "/solution",
        element:  <SolutionPage />,
      },
      {
        path: "/about",
        element:  <About />,
      },
      {
        path: "/contact-us",
        element:  <Contact />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={systemRouter} />
  </React.StrictMode>
);
