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
    <div className="flex items-center lg:items-start bg-white">

      <div>
        {
          menu === false ? <Icon onClick={() => setMenu(!menu)} icon="material-symbols:menu" className="lg:hidden text-4xl ml-2 pt-2" />
            :
            <Icon onClick={() => setMenu(!menu)} icon="akar-icons:cross" className="lg:hidden text-4xl ml-2 pt-2" />
        }
        <div className={menu === true ? "w-full lg:w-[160px] font-red lg:flex flex-col  rounded-none bg-white h-full" : "w-1/2 lg:w-[110px] font-red lg:flex flex-col  rounded-none sticky top-0 bg-white h-full hidden"}>
          <div className="sticky top-0 ">
            <img
              className="pt-4 mt-2 w-[75px] lg:mt-14 ml-3"
              src="https://i.ibb.co/JB9x4Wx/Group-1000003448.png"
              alt="LOGO"
            />
            <p className="text-black mt-4 mx-3 text-[14px] font-red">{user?.displayName}</p>


            <div className="w-12 mt-6 mb-5 ml-4 border-b-2 border-black"></div>

            <Link to="/dashboard" onClick={toTop}>
              <p onClick={() => setMenu(!menu)} className="mt-10 text-black text-[10px] cursor-pointer hover:bg-[#3186EC] hover:text-white font-red rounded-md mx-2 px-3 py-2">
                Home
              </p>
            </Link>
            <Link to="/dashboard/neworder" onClick={toTop}>
              <p onClick={() => setMenu(!menu)} className="mt-1 text-black text-[10px]   cursor-pointer hover:bg-[#3186EC] hover:text-white font-red rounded-md mx-2 px-3 py-2">
                New Order
              </p>
            </Link>
            <Link to="/dashboard/customorder" onClick={toTop}>
              <p onClick={() => setMenu(!menu)} className="mt-1 text-black text-[10px]   cursor-pointer hover:bg-[#3186EC] hover:text-white font-red rounded-md mx-2 px-3 py-2">
                Custom Order
              </p>
            </Link>


            <Link to="/dashboard/orders" onClick={toTop}>
              <p onClick={() => setMenu(!menu)} className="mt-1 text-black text-[10px]   cursor-pointer hover:bg-[#3186EC] hover:text-white font-red rounded-md mx-2 px-3 py-2">
                Orders
              </p>
            </Link>
            <Link to="/dashboard/ourteam" onClick={toTop}>
              <p onClick={() => setMenu(!menu)} className="mt-1 text-black text-[10px]   cursor-pointer hover:bg-[#3186EC] hover:text-white font-red rounded-md mx-2 px-3 py-2">
                Our Team
              </p>
            </Link>
            <Link to="/dashboard/addfunds" onClick={toTop}>
              <p onClick={() => setMenu(!menu)} className="mt-1 text-black text-[10px]   cursor-pointer hover:bg-[#3186EC] hover:text-white font-red rounded-md mx-2 px-3 py-2">
                Add Funds
              </p>
            </Link>
            <Link to="/dashboard/complainbox" onClick={toTop}>
              <p onClick={() => setMenu(!menu)} className="mt-1 text-black text-[10px]   cursor-pointer hover:bg-[#3186EC] hover:text-white font-red rounded-md mx-2 px-3 py-2">
                Ticket
              </p>
            </Link>
            <p onClick={() => setMenu(!menu)} className="mt-1 text-black text-[10px]   cursor-pointer hover:bg-[#3186EC] hover:text-white font-red rounded-md mx-2 px-3 py-2">
              Your Offer
            </p>

            <p onClick={() => setMenu(!menu)} className="mt-1 text-black text-[10px]   cursor-pointer hover:bg-[#3186EC] hover:text-white font-red rounded-md mx-2 px-3 py-2">
              Contact
            </p>
            <Link to="/dashboard/earnmoney" onClick={toTop}>
              <p onClick={() => setMenu(!menu)} className="mt-1  text-black text-[10px]   cursor-pointer hover:bg-[#3186EC] hover:text-white font-red rounded-md mx-2 px-3 pt-2 mb-10">
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
