"use client";
import SubscriptionDetails from "./SubscriptionDetails";
import PaymentInfo from "./PaymentInfo";
export default function Payment({ params }) {
  const planName = params.payment;
  return (
    <div className="container mx-auto shadow-2xl my-10 p-10">
      <div className="flex justify-evenly flex-wrap-reverse gap-5">
        <SubscriptionDetails planName={planName} />
        <PaymentInfo planName={planName}></PaymentInfo>

      </div>
    </div>
  );
}
