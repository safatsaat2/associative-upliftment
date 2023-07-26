import { createBrowserRouter } from "react-router-dom";
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
import DashNewOrder from "../Page/Dashboard/DashNewOrder";
import DashLayout from "../Page/Dashboard/DashLayout";
import Privacy from "../Page/Privacy/Privacy";
import Terms from "../Page/Terms/Terms";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services/:id",
        element: <Service />,
      },
      {
        path: "/services",
        element: 
          <Services>
            <Footer child='ok' />
          </Services>
        ,
      },
      {
        path: "/about",
        element: 
          <About>
            <Footer child='ok' />
          </About>
        ,
      },
      {
        path: "/privacy",
        element: 
          <Privacy>
            <Footer child='ok' />
          </Privacy>
        ,
      },
      {
        path: "/terms&conditions",
        element: <Terms><Footer child='ok'/></Terms>
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <DashLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "services",
        element: <DashServices />,
      },
      {
        path: "neworder",
        element: <DashNewOrder />,
      },
    ],
  },
]);
