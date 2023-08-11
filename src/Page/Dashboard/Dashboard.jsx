import { useContext,  useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
// import CheckoutFom from "../../Components/CheckoutFom";
// import { Elements } from "@stripe/react-stripe-js";

const Dashboard = () => {
  const Paddle = window.Paddle;
  const { user } = useContext(AuthContext);
  // const [stripePromise, setStripePromise] = useState(null);
  // const [clientSecret, setClientSecret] = useState("");

  // useEffect(() => {
  //   fetch("https://associative-upliftment-server.vercel.app/config").then(async (r) => {
  //     const { publishableKey } = await r.json();
  //     setStripePromise(loadStripe(publishableKey));
  //   });
  // }, []);
  // useEffect(() => {
  //   fetch("https://associative-upliftment-server.vercel.app/create-payment-intent", {
  //     method: "POST",
  //     body: JSON.stringify({}),
  //   }).then(async (r) => {
  //     const { clientSecret } = await r.json();
  //     setClientSecret(clientSecret);
  //   });
  // }, []);

  const [Email, setEmail] = useState("");
  const email = (e) => {
    setEmail(e.target.value);
  };

  const  handlePayment  = (e) => {
    e.preventDefault();
    if(Email.length  >  0){
    Paddle.Checkout.open({
    product:  843613,
    email:  Email,
    successCallback: (data, ) =>{
    console.log(data);
    //ADD YOUR EXTRA LOGIC TO SEND TO BACKEND
    }
    });
    } else {
    alert("Please enter an Email Address")
    }
    };

  return (
    <div className="flex flex-col items-center justify-end">
      <h1 className="text-6xl font-medium">Welcome {user?.displayName},</h1>
      <>
        <form onSubmit={handlePayment} >
          <p>Email</p>

          <input  onChange={email}  type="email" className='input input-bordered w-[458px] h-[74px] rounded-xl border border-black px-2'  name="name"  placeholder="hi@ronaldlangeveld.com"  value={Email}  />

          <br />

          <input className="bg-black mt-4 text-white rounded-lg lg:w-[217px] lg:h-[48px]" type="submit" value="Active your Account" />
        </form>
      </>

      {/* You can open the modal using ID.showModal() method */}
      {/* <dialog id="my_modal_2" className="modal bg-slate-50">
        <p className="-pb-[400px]">Click ESC For Cancelation</p>
        {stripePromise && clientSecret && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutFom />
          </Elements>
        )}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog> */}
    </div>
  );
};

export default Dashboard;
