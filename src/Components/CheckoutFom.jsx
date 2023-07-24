import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";

const CheckoutFom = () => {


    const stripe = useStripe()
    const elements = useElements()

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!stripe || !elements){
        return;
    }

    setIsProcessing(true)

    const {error} = await stripe.confirmPayment({
        elements,
        confirmParams: {
            return_url: `http://localhost:5173/dashboard/neworder`
        }
    });
    if(error) {
        setMessage(error.message)
    }
    setIsProcessing(false)
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement/>
      <button disabled={isProcessing} id="submit" className="bg-black mt-4 text-white rounded-lg px-5 py-2">
        <span id="button-text">
          {isProcessing ? "Processing ... " : "PAY NOW (it will take $10)"}
        </span>
      </button>

      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};

export default CheckoutFom;
