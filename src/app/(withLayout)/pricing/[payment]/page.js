"use client";
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutFrom";
import SubscriptionDetails from "./SubscriptionDetails";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Payment({ params }) {
  const [clientSecret, setClientSecret] = React.useState("");
  const [amount, setAmount] = React.useState(0);
  const planName = params.payment;
  React.useEffect(() => {

    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plan: planName }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [planName]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="container mx-auto shadow-2xl my-10 p-10">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <div className="flex justify-evenly ">
            <SubscriptionDetails planName={planName} />

            <CheckoutForm />
          </div>
        </Elements>
      )}
    </div>
  );
}
