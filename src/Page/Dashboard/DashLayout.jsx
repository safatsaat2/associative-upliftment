import { Outlet } from "react-router-dom";
import DashNav from "./DashNav";
import Dashboardtitle from "./Dashboardtitle";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Icon } from "@iconify/react";
import AdminNav from "./AdminDashBoard/AdminNav";

const DashLayout = () => {
  const [data, setData] = useState([])


  const { user } = useContext(AuthContext)
  const { type } = data
  const email = user?.email;

  useEffect(() => {
    axios.get(`https://associative-upliftment-server.vercel.app/users/${email}`)
      .then(res => {
        setData(res.data)
      })
  }, [email])
  return (
    <div className="lg:flex bg-[#FFFDEE] ">
      
      <div >
        {type === "admin" ? <AdminNav /> : <DashNav />}
      </div>
      <div className="w-full bg-[#FFFDEE]">
        <Dashboardtitle />
        <div className="py-4 mx-4">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashLayout;
