import { AuthContext } from "../../Provider/AuthProvider";
import { Icon } from "@iconify/react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Dashboardtitle = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between py-6 lg:pt-4 lg:py-7">

<div className=" text-3xl flex items-center font-semibold ">
  <img src="https://i.ibb.co/z2b0DFN/Whats-App-Image-2023-09-05-at-21-37-33.jpg" className='w-10 rounded-full' alt="" />
  <p className="text-base lg:text-xl text-[#602A2A] ml-2 font-harlow">Associative Upliftment</p>

</div>
<div className="text-black  lg:mb-0  lg:ml-0 ml-16">
  <div className="flex items-center lg:gap-x-12">
    <img className="w-[12px] hidden lg:block lg:w-[24px]" src="https://i.ibb.co/zf6d9wG/comment.png" alt="" />
    <img className="w-[12px] hidden lg:block lg:w-[24px]" src="https://i.ibb.co/KWcFbYM/User-cicrle-duotone-line.png" alt="" />
    <img className="w-[24px]" src="https://i.ibb.co/cDbVJgc/Bell-pin.png" alt="" />
    <div>
      {user ? (
        <>
          <Link to="/login">
            <button
              onClick={logOut}
              className="bg-black text-white rounded-lg p-2"
            >
              Logout
            </button>
          </Link>
        </>
      ) : (
        <>

        </>
      )}
    </div>
  </div>
</div>

</div>
    </div>
  );
};

export default Dashboardtitle;
