import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutFom from "../../Components/CheckoutFom";
import { Elements } from "@stripe/react-stripe-js";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("http://localhost:7000/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);
  useEffect(() => {
    fetch("http://localhost:7000/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (r) => {
      const { clientSecret } = await r.json();
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-end lg:h-[250px]">
      <h1 className="text-6xl font-medium">Welcome {user?.displayName},</h1>

      <button
        onClick={() => window.my_modal_2.showModal()}
        className="bg-black mt-4 text-white rounded-lg lg:w-[217px] lg:h-[48px]"
      >
        Active your Account
      </button>
      {/* You can open the modal using ID.showModal() method */}
      <dialog id="my_modal_2" className="modal bg-slate-50">
        Click ESC For Cancelation 
        {stripePromise && clientSecret && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutFom />
          </Elements>
        )}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Dashboard;
