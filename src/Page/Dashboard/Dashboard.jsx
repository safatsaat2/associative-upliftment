import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const Dashboard = () => {
  const { user } = useContext(AuthContext); 
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  
   useEffect(() =>{
    fetch("http://localhost:7000/config").then(async(r) =>{
      const {publishableKey} = await r.json()
      setStripePromise(loadStripe(publishableKey))
    })
   }, [])
  const handleCheckout = async ( )=>{
    
  }
  return (
        <div className="flex flex-col items-center justify-end lg:h-[250px]">
          <h1 className="text-6xl font-medium">Welcome {user?.displayName},</h1>
          <button onClick={handleCheckout} className="bg-black mt-4 text-white rounded-lg lg:w-[217px] lg:h-[48px]">
            Active your Account
          </button>
        </div>

  );
};

export default Dashboard;
