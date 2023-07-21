import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
        <div className="flex flex-col items-center justify-end lg:h-[250px]">
          <h1 className="text-6xl font-medium">Welcome {user?.displayName},</h1>
          <button className="bg-black mt-4 text-white rounded-lg lg:w-[217px] lg:h-[48px]">
            Active your Account
          </button>
        </div>

  );
};

export default Dashboard;
