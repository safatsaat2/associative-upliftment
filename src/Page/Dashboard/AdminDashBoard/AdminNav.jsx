import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const AdminNav = () => {
    const { user } = useContext(AuthContext)


  const toTop = () => {
    window.scrollTo(0, 0);
  };
    return (
        <div className="lg:w-[328px] lg:flex flex-col justify-center items-center rounded-none sticky top-0 bg-black shadowDash">
      <div className="sticky top-0">
        <img
          className="pt-4 mt-2 lg:mt-14 mx-auto"
          src="https://i.ibb.co/JB9x4Wx/Group-1000003448.png"
          alt="LOGO"
        />
        <p className="text-white mt-4 text-center">{user?.displayName}</p>

        <Link to="/dashboard/adminorderpage" onClick={toTop}>
          <p className="mt-10  text-white text-center   cursor-pointer hover:bg-[#FFE600] hover:text-black mr-4 rounded-md px-3 py-2">
          Order receive
          </p>
        </Link>
        <Link to="/dashboard/neworder" onClick={toTop}>
          <p className="mt-1  text-white text-center   cursor-pointer hover:bg-[#FFE600] hover:text-black mr-4 rounded-md px-3 py-2">
          Refer codes
          </p>
        </Link>
        <Link to="/dashboard/customorder" onClick={toTop}>
          <p className="mt-1  text-white text-center   cursor-pointer hover:bg-[#FFE600] hover:text-black mr-4 rounded-md px-3 py-2">
          Payment Received
          </p>
        </Link>


        <Link to="/dashboard/orders" onClick={toTop}>
          <p className="mt-1  text-white text-center   cursor-pointer hover:bg-[#FFE600] hover:text-black mr-4 rounded-md px-3 py-2">
          Notification
          </p>
        </Link>
        <Link to="/dashboard/ourteam" onClick={toTop}>
        <p className="mt-1  text-white text-center   cursor-pointer hover:bg-[#FFE600] hover:text-black mr-4 rounded-md px-3 py-2">
        UserList
        </p>
        </Link>
        <Link to="/dashboard/addfunds" onClick={toTop}>
          <p className="mt-1  text-white text-center   cursor-pointer hover:bg-[#FFE600] hover:text-black mr-4 rounded-md px-3 py-2">
          Ticket Receive
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

export default AdminNav;