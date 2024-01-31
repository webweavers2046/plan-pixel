import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
const Payment = ({ refetch }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckOutForm refetch={refetch} />
    </Elements>
  );
};
import PropTypes from "prop-types";

Payment.propTypes = {
  refetch: PropTypes.func.isRequired,
};
export default Payment;




import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/axiosSecureApi/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import useGetSecure from "../../../hooks/axiosSecureApi/useGetSecure";
import isCouponValid from "../../../utils/isCouponValid";
import toast from "react-hot-toast";
import useCheckRole from "../../../hooks/useCheckRole";

const CheckOutForm = ({ refetch }) => {
  const { userInfo } = useCheckRole();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [price, setPrice] = useState(200); //  your dynamic subscription amount
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const { data: coupons } = useGetSecure("/coupons", "coupons");

  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price: price }).then((res) => {
      // console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSecure, price]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    try {
      if (!stripe || !elements) {
        return;
      }

      const card = elements.getElement(CardElement);

      if (card === null) {
        return;
      }

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });

      if (error) {
        console.log("[error]", error);
        setError(error.message);
      }
      if (paymentMethod) {
        console.log("[paymentMethod]", paymentMethod);
        setError("");
      }

      // confirm payment
      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              name: user?.displayName || "anonymous",
              email: user?.email || "anonymous",
            },
          },
        });
      if (confirmError) {
        console.log("confirmError");
      } else {
        console.log("paymentIntent", paymentIntent);
        if (paymentIntent.status === "succeeded") {
          const userId = userInfo?.userId;
          const subscription = { subscription: "premium" };
          // console.log(paymentIntent.id);
          setTransactionId(paymentIntent.id);
          const res = await axiosSecure.put(`users/${userId}`, subscription);
          document.getElementById("my_modal_3").close();
          refetch()
          console.log(res);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  // handle for apply coupon
  const handleApplyCoupon = () => {
    try {
      if (!couponApplied) {
        const couponStatus = isCouponValid(couponCode, coupons);

        if (couponStatus) {
          const matchedCoupon = coupons.find(
            (c) => c.couponCode === couponCode
          );
          const discount = matchedCoupon.discountAmount;

          // Update price only if the coupon has not been applied yet
          setPrice(price - discount);

          // Mark the coupon as applied
          setCouponApplied(true);
          toast.success("Successfully applied coupon");
          setError(null);
        }
      } else {
        toast.error("Coupon has already been applied");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <form
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <p className="text-xl font-semibold mb-4">
        Subscription Amount: ${price}
      </p>

      <div className="mb-4">
        <label
          htmlFor="couponCode"
          className="block text-sm font-medium text-gray-600"
        >
          Coupon Code: hurry
        </label>
        <div className="join mt-1 flex rounded-md shadow-sm">
          <input
            type="text"
            id="couponCode"
            className=" join-item input input-primary bg-white input-md w-full"
            placeholder="Enter coupon code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button
            type="button"
            className="join-item btn btn-primary font-bold text-white"
            onClick={handleApplyCoupon}
          >
            Apply
          </button>
        </div>
      </div>

      <div className="mb-4 border rounded-md py-3 px-2 border-primary">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
      </div>

      <div className="text-center">
        <button
          className="btn btn-primary text-white font-bold"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay Now
        </button>
      </div>

      <p className="text-red-500 font-bold mt-2">{error}</p>

      {transactionId && (
        <p className="text-green-500 font-bold mt-2">
          Your Transaction Id: {transactionId}
        </p>
      )}
    </form>
  );
};

import PropTypes from 'prop-types';

CheckOutForm.propTypes = {
  refetch: PropTypes.func.isRequired,
};
export default CheckOutForm;
