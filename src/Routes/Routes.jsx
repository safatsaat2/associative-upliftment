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
import Contact from "../Page/Contact/Contact";
// import Shop from "../Page/Shop/Shop";
import Team from "../Page/Team/Team";
import PopularDetails from "../Page/Service/PopularDetails";
import DashCustom from "../Page/Dashboard/DashCustom";
import DashComplainBox from "../Page/Dashboard/DashComplainBox";
import DashEarnMoney from "../Page/Dashboard/DashEarnMoney";
import DashOrders from "../Page/Dashboard/DashOrders";
import DashOurTeam from "../Page/Dashboard/DashOurTeam";
import DashAddFunds from "../Page/Dashboard/DashAddFunds";
import AdminOrderPage from "../Page/Dashboard/AdminDashBoard/AdminOrderPage";
import AdminReferCode from "../Page/Dashboard/AdminDashBoard/AdminReferCode";
import AdminPayment from "../Page/Dashboard/AdminDashBoard/AdminPayment";
import AdminUserList from "../Page/Dashboard/AdminDashBoard/AdminUserList";
import DashWelcome from "../Page/Dashboard/DashWelcome";
import DashYourOffer from "../Page/Dashboard/DashYourOffer";
import DashService from "../Page/Dashboard/DashService";
import Strategy from "../Page/Strategy/Strategy";
import Career from "../Page/Career";

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
        path: "/popularservice/:id",
        element: <PopularDetails>
          <Footer child='ok' />
        </PopularDetails>
        ,
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
        path: "/team/:id",
        element: <Team>
          <Footer child='ok' />
        </Team>
      },
      {
        path: "/strategy/:name",
        element: <Strategy>
          <Footer child='ok'/>
        </Strategy>
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
        path: "/career",
        element:
          <Career>
            <Footer child='ok' />
          </Career>
        ,
      },
      // {
      //   path: "/shop",
      //   element:
      //     <Shop>
      //       <Footer child='ok' />
      //     </Shop>
      //   ,
      // },
      {
        path: "/terms&conditions",
        element: <Terms><Footer child='ok' /></Terms>
      },
      {
        path: "/contact",
        element: <Contact><Footer child='ok' /></Contact>
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
        element: <DashWelcome/>,
      },
      {
        path: "home",
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
      {
        path: "customorder",
        element: <DashCustom/>
      },
      {
        path: "complainbox",
        element: <DashComplainBox/>
      },
      {
        path: "earnmoney",
        element: <DashEarnMoney/>
      },
      {
        path: "orders",
        element: <DashOrders/>
      },
      {
        path: "ourteam",
        element: <DashOurTeam/>
      },
      {
        path: "addfunds",
        element: <DashAddFunds/>
      },
      {
        path:"adminorderpage",
        element: <AdminOrderPage/>
      },
      {
        path: "adminrefercode",
        element: <AdminReferCode/>
      },
      {
        path: "adminpayment",
        element: <AdminPayment/>
      },
      {
        path: "userlist",
        element: <AdminUserList/>
      },
      {
        path: "youroffer",
        element: <DashYourOffer/>
      },
      {
        path: "service/:id",
        element: <DashService/>
      },
    ],
  },
]);
