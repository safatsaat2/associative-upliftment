import { Outlet } from "react-router-dom";
import DashNav from "./DashNav";
import Dashboardtitle from "./Dashboardtitle";

const DashLayout = () => {
  return (
    <div className="lg:flex ">
      <DashNav />
      <div className="w-full bg-slate-100 ">
        <Dashboardtitle />
        <div className="my-10 mx-4">
            <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashLayout;
