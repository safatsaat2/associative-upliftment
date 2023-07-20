import { useContext } from "react";
import DashNav from "./DashNav";
import { AuthContext } from "../../Provider/AuthProvider";
import Dashboardtitle from "./Dashboardtitle";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="lg:flex">
      <DashNav />
      <div className="w-full lg:w-3/4 bg-slate-100 ">
        <Dashboardtitle/>
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
