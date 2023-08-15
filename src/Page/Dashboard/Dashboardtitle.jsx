import { AuthContext } from "../../Provider/AuthProvider";
import { Icon } from "@iconify/react";
import { useContext, useState } from "react";

const Dashboardtitle = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className=" bg-white flex flex-row items-center justify-between py-6 lg:pt-4 lg:py-7">
      
      <div className=" text-black text-3xl font-semibold ">

        <p className="text-base lg:text-4xl text-[#3186EC] ml-5 font-red">Associative Upliftment</p>

      </div>
      <div className="text-black  lg:mb-0 lg:mr-10 lg:ml-0 ml-5">
        <div className="flex gap-x-7">
          <img className="w-[12px] lg:w-[24px]" src="https://i.ibb.co/zf6d9wG/comment.png" alt="" />
          <img className="w-[12px] lg:w-[24px]" src="https://i.ibb.co/KWcFbYM/User-cicrle-duotone-line.png" alt="" />
          <img className="w-[12px] lg:w-[24px]" src="https://i.ibb.co/cDbVJgc/Bell-pin.png" alt="" />

        </div>
      </div>
    </div>
  );
};

export default Dashboardtitle;
