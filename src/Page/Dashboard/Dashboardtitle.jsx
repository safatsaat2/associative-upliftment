import { AuthContext } from "../../Provider/AuthProvider";
import { Icon } from "@iconify/react";
import { useContext } from "react";

const Dashboardtitle = () => {
    const { user } = useContext(AuthContext);
  return (
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
  );
};

export default Dashboardtitle;
