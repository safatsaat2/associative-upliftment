import { useContext } from "react";
import DashNav from "./DashNav";
import { AuthContext } from "../../Provider/AuthProvider";
import { Icon } from "@iconify/react";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="lg:flex">
      <DashNav />
      <div className="w-full lg:w-3/4 bg-slate-100 ">
        <div className="flex items-center justify-between mt-9">
          <div></div>
          <div>
            <h1 className="text-6xl font-medium">Balance:</h1>
          </div>
          <div className="flex items-center">
            <div>
              <h1 className="text-[32px] mr-6">Hi {user?.displayName},</h1>
            </div>
            {user?.photoURL === null ? (
              <Icon className="text-[92px]" icon="radix-icons:avatar" />
            ) : (
              <img src="" alt="" />
            )}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-2/3">
          <h1 className="text-6xl font-medium">Welcome {user?.displayName},</h1>
          <button className="bg-black mt-4 text-white rounded-lg lg:w-[217px] lg:h-[48px]">
            Active your Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
