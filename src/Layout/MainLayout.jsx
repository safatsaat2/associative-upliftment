import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import UpperNav from "../Components/UpperNav";

const MainLayout = () => {
  return (
    <div >
      <div className="max-w-7xl mx-auto">
        <UpperNav />
      </div>
      <Navbar />

      <Outlet />
    </div>
  );
};

export default MainLayout;
