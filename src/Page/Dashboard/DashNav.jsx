import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Dashboardtitle from "./Dashboardtitle";

const DashNav = () => {
  const { user } = useContext(AuthContext)
  const [menu, setMenu] = useState(false)


  const toTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="flex flex-col items-center lg:items-start bg-black max-w-7xl mx-auto">

      <div className="mx-auto">
        {
          menu === false ? <Icon onClick={() => setMenu(!menu)} icon="material-symbols:menu" className="lg:hidden text-4xl ml-2 pt-2" />
            :
            <Icon onClick={() => setMenu(!menu)} icon="akar-icons:cross" className="lg:hidden text-4xl ml-2 pt-2" />
        }
        <div className={menu === true ? "w-full lg:w-[160px] lg:flex flex-col  rounded-none bg-black h-full" : " lg:flex flex-col rounded-none sticky top-0 bg-black h-full hidden"}>
          <div className="flex flex-col lg:flex-row ">
            {/* <img
              className="pt-4 mt-2 w-[75px] lg:mt-14 ml-3"
              src="https://i.ibb.co/JB9x4Wx/Group-1000003448.png"
              alt="LOGO"
            />
            <p className="text-black mt-4 mx-3 text-[14px]">{user?.displayName}</p>


            <div className="w-12 mt-6 mb-5 ml-4 border-b-2 border-black"></div> */}

            <Link to="/dashboard/home" onClick={toTop}>
              <p onClick={() => setMenu(false)} className=" text-white text-[12px] cursor-pointer hover:text-white rounded-md mx-2 px-3 py-2">
                Home
              </p>
            </Link>
            <Link to="/dashboard/neworder" onClick={toTop}>
              <p onClick={() => setMenu(false)} className=" text-white text-[12px]   cursor-pointer hover:text-white rounded-md mx-2 px-3 py-2">
                Hire Team
              </p>
            </Link>
            <Link to="/dashboard/customorder" onClick={toTop}>
              <p onClick={() => setMenu(false)} className=" text-white text-[12px]   cursor-pointer hover:text-white rounded-md mx-2 px-3 py-2">
                Custom Order
              </p>
            </Link>


            <Link to="/dashboard/orders" onClick={toTop}>
              <p onClick={() => setMenu(false)} className=" text-white text-[12px]   cursor-pointer hover:text-white rounded-md mx-2 px-3 py-2">
                Orders
              </p>
            </Link>
            <Link to="/dashboard/ourteam" onClick={toTop}>
              <p onClick={() => setMenu(false)} className=" text-white text-[12px]   cursor-pointer hover:text-white rounded-md mx-2 px-3 py-2">
                Our Team
              </p>
            </Link>
            <Link to="/dashboard/addfunds" onClick={toTop}>
              <p onClick={() => setMenu(false)} className=" text-white text-[12px] cursor-pointer hover:text-white rounded-md mx-2 px-3 py-2">
                Add Funds
              </p>
            </Link>
            <Link to="/dashboard/complainbox" onClick={toTop}>
              <p onClick={() => setMenu(false)} className=" text-white text-[12px]   cursor-pointer hover:text-white rounded-md mx-2 px-3 py-2">
                Ticket
              </p>
            </Link>
            <Link to="/dashboard/youroffer">
            <p onClick={() => setMenu(false)} className=" text-white text-[12px]   cursor-pointer hover:text-white rounded-md mx-2 px-3 py-2">
              Your Offer
            </p>
            </Link>

            <p onClick={() => setMenu(false)} className=" text-white text-[12px]   cursor-pointer hover:text-white rounded-md mx-2 px-3 py-2">
              Contact
            </p>
            <Link to="/dashboard/earnmoney" onClick={toTop}>
              <p onClick={() => setMenu(false)} className="  text-white text-[12px]   cursor-pointer hover:text-white rounded-md mx-2 px-3 pt-2 ">
                Earn Money
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className={menu === true ? "hidden" : "lg:hidden"}>
        <Dashboardtitle />
      </div>
    </div>
  );
};

export default DashNav;
