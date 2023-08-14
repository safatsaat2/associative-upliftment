import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Icon } from "@iconify/react";
import { useState } from "react";

const DashNav = () => {
  const { user } = useContext(AuthContext)
  const [menu, setMenu] = useState(false)


  const toTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
    {
        menu === false ? <Icon onClick={() => setMenu(!menu)} icon="material-symbols:menu" className="lg:hidden text-4xl ml-2 pt-2" />
          :
          <Icon onClick={() => setMenu(!menu)} icon="akar-icons:cross" className="lg:hidden text-4xl ml-2 pt-2" />
      }
    <div className="w-1/2 lg:w-[328px] lg:flex flex-col justify-center items-center rounded-none sticky top-0 bg-black shadowDash h-full">
      <div className="sticky top-0">
        <img
          className="pt-4 mt-2 lg:mt-14 mx-auto"
          src="https://i.ibb.co/JB9x4Wx/Group-1000003448.png"
          alt="LOGO"
        />
        <p className="text-white mt-4 text-center">{user?.displayName}</p>

        <Link to="/dashboard" onClick={toTop}>
          <p className="mt-10  text-white text-center   cursor-pointer hover:bg-[#FFE600] hover:text-black mr-4 rounded-md px-3 py-2">
            Home
          </p>
        </Link>
        <Link to="/dashboard/neworder" onClick={toTop}>
          <p className="mt-1  text-white text-center   cursor-pointer hover:bg-[#FFE600] hover:text-black mr-4 rounded-md px-3 py-2">
            New Order
          </p>
        </Link>
        <Link to="/dashboard/customorder" onClick={toTop}>
          <p className="mt-1  text-white text-center   cursor-pointer hover:bg-[#FFE600] hover:text-black mr-4 rounded-md px-3 py-2">
            Custom Order
          </p>
        </Link>


        <Link to="/dashboard/orders" onClick={toTop}>
          <p className="mt-1  text-white text-center   cursor-pointer hover:bg-[#FFE600] hover:text-black mr-4 rounded-md px-3 py-2">
            Orders
          </p>
        </Link>
        <Link to="/dashboard/ourteam" onClick={toTop}>
        <p className="mt-1  text-white text-center   cursor-pointer hover:bg-[#FFE600] hover:text-black mr-4 rounded-md px-3 py-2">
          Our Team
        </p>
        </Link>
        <Link to="/dashboard/addfunds" onClick={toTop}>
          <p className="mt-1  text-white text-center   cursor-pointer hover:bg-[#FFE600] hover:text-black mr-4 rounded-md px-3 py-2">
            Add Funds
          </p>
        </Link>
        <Link to="/dashboard/complainbox" onClick={toTop}>
        <p className="mt-1  text-white text-center   cursor-pointer hover:bg-[#FFE600] hover:text-black mr-4 rounded-md px-3 py-2">
          Ticket
        </p>
        </Link>
        <p className="mt-1  text-white text-center   cursor-pointer hover:bg-[#FFE600] hover:text-black mr-4 rounded-md px-3 py-2">
          Your Offer
        </p>
        
        <p className="mt-1  text-white text-center   cursor-pointer hover:bg-[#FFE600] hover:text-black mr-4 rounded-md px-3 py-2">
          Contact
        </p>
        <Link to="/dashboard/earnmoney" onClick={toTop}>
          <p className="mt-1  text-white text-center   cursor-pointer hover:bg-[#FFE600] hover:text-black mr-4 rounded-md px-3 py-2">
            Earn Money
          </p>
        </Link>

        <Link to='/' onClick={toTop}>
          <p className="my-10  text-white text-center   cursor-pointer hover:bg-[#FFE600] hover:text-black mr-4 rounded-md px-3 py-2">
            Go to Home
          </p>
        </Link>
      </div>
    </div>
    </>
  );
};

export default DashNav;
