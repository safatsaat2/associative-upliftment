import { AuthContext } from "../../Provider/AuthProvider";
import { Icon } from "@iconify/react";
import { useContext } from "react";

const Dashboardtitle = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-white flex flex-col-reverse lg:flex-row lg:items-center justify-between pt-4 py-7">
      <div className=" text-black text-3xl font-semibold ">

        <p className="text-4xl text-[#3186EC] ml-5 font-red">Associative Upliftment</p>

      </div>
      <div className="text-black mb-6 lg:mb-0 mr-5">
        <div className="flex gap-x-7">

          <img src="https://i.ibb.co/KWcFbYM/User-cicrle-duotone-line.png" alt="" />
          <img src="https://i.ibb.co/cDbVJgc/Bell-pin.png" alt="" />
          <img src="https://i.ibb.co/zf6d9wG/comment.png" alt="" />

        </div>
      </div>
    </div>
  );
};

export default Dashboardtitle;
