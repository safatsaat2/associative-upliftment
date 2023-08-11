import { useContext,  useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
// import CheckoutFom from "../../Components/CheckoutFom";
// import { Elements } from "@stripe/react-stripe-js";

const Dashboard = () => {

  const { user } = useContext(AuthContext);

  return (
    <div className="">
      <div>
        <div className="">

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
