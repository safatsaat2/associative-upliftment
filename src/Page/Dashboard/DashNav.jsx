import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const DashNav = () => {
  const { user } = useContext(AuthContext)


  const toTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="w-[328px] hidden lg:flex flex-col items-center rounded-none  top-0 bg-black shadowDash">
      <div className="sticky top-0">
        <img
          className="mt-14"
          src="https://i.ibb.co/JB9x4Wx/Group-1000003448.png"
          alt="LOGO"
        />
        <p className="text-white mt-4">{user?.displayName}</p>

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
        <p className="mt-1  text-white text-center   cursor-pointer hover:bg-[#FFE600] hover:text-black mr-4 rounded-md px-3 py-2">
          Our Team
        </p>
        <Link to="/dashboard/services" onClick={toTop}>
          <p className="mt-1  text-white text-center   cursor-pointer hover:bg-[#FFE600] hover:text-black mr-4 rounded-md px-3 py-2">
            Add Funds
          </p>
        </Link>
        <p className="mt-1  text-white text-center   cursor-pointer hover:bg-[#FFE600] hover:text-black mr-4 rounded-md px-3 py-2">
          Ticket
        </p>
        <p className="mt-1  text-white text-center   cursor-pointer hover:bg-[#FFE600] hover:text-black mr-4 rounded-md px-3 py-2">
          Your Offer
        </p>
        <Link to="/dashboard/complainbox" onClick={toTop}>
          <p className="mt-1  text-white text-center   cursor-pointer hover:bg-[#FFE600] hover:text-black mr-4 rounded-md px-3 py-2">
            Complaint Box
          </p>
        </Link>

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
  );
};

export default DashNav;
