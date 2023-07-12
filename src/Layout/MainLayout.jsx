import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <div >
      <div className="max-w-7xl mx-auto">
      <Navbar />
      </div>
        <Outlet />
    </div>
  );
};

export default MainLayout;
