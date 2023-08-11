import { AuthContext } from "../../Provider/AuthProvider";
import { Icon } from "@iconify/react";
import { useContext } from "react";

const Dashboardtitle = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex items-center justify-between mt-4 mx-4">
      <div className="bg-white text-black text-3xl font-semibold py-4 pl-4 pr-20 rounded-xl dashShadow">
        <p className="mb-2">ID:*************</p>
        <p>Balance: $00</p>
      </div>
      <div className="text-black">
        <p className="text-2xl mb-2">Welcome, {user?.displayName}</p>
        <div className="flex">
          <div className="flex gap-x-2 mr-4">
            <p className="">Notification</p>
            <div className="relative">
            <Icon icon="ri:notification-line" className="text-2xl" />
            <div className="px-[5px] py-[2px] bg-[#FFE500] rounded-full flex justify-center items-center absolute top-0 right-0">
              <p className="text-[7px]">8</p>
            </div>
            </div>
          </div>
          <p>Report</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboardtitle;
