import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import UpperNav from "../Components/UpperNav";
import NewNavbar from "../Components/NewNavbar";
import { useContext, useState } from "react";
import Loader from "../Components/Loader";
import { useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MainLayout = () => {

  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  const {user} = useContext(AuthContext)

  if(user){
   return navigate("/dashboard/home")
  }
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000);
    return () => clearTimeout(timer);
  }, []);


  if(loading){
    return <Loader/>
  }
  
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
