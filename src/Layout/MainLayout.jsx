import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import UpperNav from "../Components/UpperNav";
import NewNavbar from "../Components/NewNavbar";

const MainLayout = () => {
  return (
    <div >
      <div className="max-w-7xl mx-auto">
        <UpperNav />
      </div>
      <div className="block lg:hidden">
      <Navbar />
      </div>
      <div className="hidden lg:block">
      <NewNavbar/>
      </div>

      <Outlet />
    </div>
  );
};

export default MainLayout;
