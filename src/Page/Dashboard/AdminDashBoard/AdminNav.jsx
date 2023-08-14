import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Icon } from "@iconify/react";

const AdminNav = () => {
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
        <div className={menu === true ? "w-1/2 lg:w-[328px] lg:flex flex-col items-center rounded-none bg-black shadowDash h-full" : "w-1/2 lg:w-[328px] lg:flex flex-col  items-center rounded-none bg-black shadowDash h-full hidden"}>
          
      <div className="sticky top-0">
        <img
          className=" pt-2 mt-4 lg:mt-14 mx-auto"
          src="https://i.ibb.co/JB9x4Wx/Group-1000003448.png"
          alt="LOGO"
        />
        <p className="text-white mt-4 text-center">{user?.displayName}</p>

        <Link to="/dashboard/adminorderpage" onClick={toTop} >
          <p onClick={() => setMenu(!menu)} className="mt-10  text-white text-center   cursor-pointer hover:bg-[#FFE600] hover:text-black mr-4 rounded-md px-3 py-2">
          Order receive
          </p>
        </Link>
        <Link to="/dashboard/adminrefercode" onClick={toTop} >
          <p onClick={() => setMenu(!menu)} className="mt-1  text-white text-center   cursor-pointer hover:bg-[#FFE600] hover:text-black mr-4 rounded-md px-3 py-2">
          Refer codes
          </p>
        </Link>
        <Link to="/dashboard/adminpayment" onClick={toTop} >
          <p onClick={() => setMenu(!menu)} className="mt-1  text-white text-center   cursor-pointer hover:bg-[#FFE600] hover:text-black mr-4 rounded-md px-3 py-2">
          Payment Received
          </p>
        </Link>


        <Link to="/dashboard/orders" onClick={toTop} >
          <p onClick={() => setMenu(!menu)} className="mt-1  text-white text-center   cursor-pointer hover:bg-[#FFE600] hover:text-black mr-4 rounded-md px-3 py-2">
          Notification
          </p>
        </Link>
        <Link to="/dashboard/userlist" onClick={toTop} >
        <p onClick={() => setMenu(!menu)} className="mt-1  text-white text-center   cursor-pointer hover:bg-[#FFE600] hover:text-black mr-4 rounded-md px-3 py-2">
        User List
        </p>
        </Link>
        <Link to="/dashboard/addfunds" onClick={toTop} >
          <p onClick={() => setMenu(!menu)} className="mt-1  text-white text-center   cursor-pointer hover:bg-[#FFE600] hover:text-black mr-4 rounded-md px-3 py-2">
          Ticket Receive
          </p>
        </Link>
        

        <Link to='/' onClick={toTop} >
          <p onClick={() => setMenu(!menu)} className="my-10  text-white text-center   cursor-pointer hover:bg-[#FFE600] hover:text-black mr-4 rounded-md px-3 py-2">
            Go to Home
          </p>
        </Link>
      </div>
    </div>
        </>
    );
};

export default AdminNav;