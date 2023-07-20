import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp.jsx/SignUp";
import Service from "../Page/Services/Service";
import Services from "../Page/Home/Services";
import Footer from "../Page/Home/Footer";
import About from "../Page/Home/About";
import Dashboard from "../Page/Dashboard/Dashboard";
import DashServices from "../Page/Dashboard/DashServices";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
            path:'/',
            element:<Home/>
        },
        {
          path: '/services/:id',
          element: <Service/>
        },
        {
          path: '/services',
          element: <Services><Footer/></Services>
        },
        {
          path: '/about',
          element: <About><Footer/></About>
        }
      ]
    },
    {
      path:'/login',
      element: <Login/>
    },
    {
      path:'/signup',
      element: <SignUp/>
    },
    {
      path:'/dashboard',
      element:<Dashboard/>
    },
    {
      path:'/dashboard/services',
      element:<DashServices/>
    },
  ]);

