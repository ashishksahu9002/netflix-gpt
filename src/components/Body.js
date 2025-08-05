import React from "react";
import Login from "./Login";
import Header from "./Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./SignUp";
import Browse from "./Browse";

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/browse',
      element: <Browse />
    }
  ])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
