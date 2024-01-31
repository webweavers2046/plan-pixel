const SubscriptionDetails = ({planName}) => {

      let plan = plans.find((plan) => plan.planName === planName);

      if (!plan) {
        return <div>Plan not found</div>;
      }
    return (
      <div className="space-y-4">
        <div className="flex">
          <h3 className="text-4xl font-bold">{plan.name}</h3>
          <h2 className="font-bold text-5xl italic">
            {plan.price}<span className="text-xl">/Month</span>
          </h2>
        </div>
        <p className="text-xl font-bold text-gray-500">
          {plan.description}
        </p>
        <ul>
          {plan.offers.map((offer, index) => (
            <li key={index} className="flex items-center gap-4 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16 8L8.70711 15.2929C8.31658 15.6834 7.68342 15.6834 7.29289 15.2929L4 12"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 8L14.7071 15.2929C14.3166 15.6834 13.6834 15.6834 13.2929 15.2929L11 13"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{offer}</span>
            </li>
          ))}
        </ul>
      </div>
    );
};
export default SubscriptionDetails;



        const plans = [
          {
            name: "Basic Plan",
            price: "$12",
            description:
              "Get started with unlimited task creation and management.",
            offers: [
              "Ideal for individuals and freelancers.",
              "Unlimited task creation and management.",
              "Basic collaboration features.",
              "Standard customer support.",
              "Ideal for individuals and freelancers.",
            ],
            planName: "basic",
          },
          {
            name: "Enterprise Plan",
            price: "$30",
            description:
              "Customize workflows and project boards to fit your unique needs.",
            offers: [
              "Tailored for large organizations and businesses.",
              "Includes all features from Pro Plan.",
              "24/7 premium customer support.",
              "All features from the Pro Plan.",
              "Includes all features from Pro Plan.",
              "Customizable workflows and project boards.",
              "Standard customer support.",
              "Dedicated account manager.",
              "Enjoy the services of a dedicated account manager and 24/7 premium customer support.",
            ],
            planName: "enterprise",
          },
          {
            name: "Pro Plan",
            price: "$23",
            description:
              "Enhance collaboration with real-time chat and advanced reporting.",
            offers: [
              "Perfect for small to medium-sized teams.",
              "Includes all features from Basic Plan.",
              "Basic collaboration features.",
              "Standard customer support.",
              "Advanced task analytics and reporting",
              "Priority customer support for a more responsive experience.",
            ],
            planName: "pro",
          },
        ];