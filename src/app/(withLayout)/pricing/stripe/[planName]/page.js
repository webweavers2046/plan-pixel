import Stripe from "./Stripe";

const page = ({params}) => {
const planName = params.planName
  return (
    <div className="flex justify-center items-center py-20">
      <Stripe planName={planName}/>
    </div>
  );
};
export default page;
