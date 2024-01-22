

const PricePlans = () => {

    const basicOffers = [
        "Ideal for individuals and freelancers.",
        "Unlimited task creation and management.",
        "Basic collaboration features.",
        "Standard customer support.",
        "Ideal for individuals and freelancers."
    ]
    const enterpriseOffers = [
        "Tailored for large organizations and businesses.",
        "Includes all features from Pro Plan.",
        "24/7 premium customer support.",
        "All features from the Pro Plan.",
        "Includes all features from Pro Plan.",
        "Customizable workflows and project boards.",
        "Standard customer support.",
        "Dedicated account manager.",
        "Enjoy the services of a dedicated account manager and 24/7 premium customer support."

    ]
    const proOffers = [
        "Perfect for small to medium-sized teams.",
        "Includes all features from Basic Plan.",
        "Basic collaboration features.",
        "Standard customer support.",
        "Advanced task analytics and reporting",
        "Priority customer support for a more responsive experience."

    ]


    return (
        <section className='mt-20 mb-44'>
            <h5 className='text-[#50B577] text-center text-xl font-bold'>Pricing</h5>
            <h3 className='text-5xl font-bold mt-3 text-center'>Right plan for you</h3>

            <div className='mt-16 grid grid-cols-3 gap-5'>
                {/* Basic plan */}
                <div>
                    <h4 className='text-2xl font-bold px-9 rounded-t-lg pt-14 bg-[#FBBC0580]'>Basic Plan</h4>
                    <div className='px-9 rounded-b-lg mt-[2px] pt-14 bg-[#FBBC0580]'>
                        <h2 className='font-bold text-6xl italic'>$12 <span className='text-xl'>/Month</span></h2>
                        <p className='mt-5 mb-8'>Get started with unlimited task creation and management.</p>
                        <ul>
                            {
                                basicOffers?.map(offer => <li key={offer} className='flex items-center gap-4 mb-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M16 8L8.70711 15.2929C8.31658 15.6834 7.68342 15.6834 7.29289 15.2929L4 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M22 8L14.7071 15.2929C14.3166 15.6834 13.6834 15.6834 13.2929 15.2929L11 13" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>{offer}</span>
                                </li>)
                            }
                        </ul>
                        <button className='font-bold my-9 py-4 rounded-xl mx-auto border border-black w-full'>Choose Plan</button>
                    </div>
                </div>
                {/* Enterprise Plan */}

                <div>
                    <h4 className='text-2xl font-bold px-9 rounded-t-lg pt-14 bg-[#50B57780]'>Enterprise Plan</h4>
                    <div className='px-9 rounded-b-lg mt-[2px] pt-14 bg-[#50B57780]'>
                        <h2 className='font-bold text-6xl italic'>$30 <span className='text-xl'>/Month</span></h2>
                        <p className='mt-5 mb-8'>Customize workflows and project boards
                            to fit your unique needs.</p>
                        <ul>
                            {
                                enterpriseOffers?.map(offer => <li key={offer} className='flex items-center gap-4 mb-3'>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M16 8L8.70711 15.2929C8.31658 15.6834 7.68342 15.6834 7.29289 15.2929L4 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M22 8L14.7071 15.2929C14.3166 15.6834 13.6834 15.6834 13.2929 15.2929L11 13" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </p>
                                    <span>{offer}</span>
                                </li>)
                            }
                        </ul>
                        <button className='font-bold my-9 py-4 rounded-xl mx-auto text-[#FFF]  bg-[#50B577] w-full'>Choose Plan</button>
                    </div>
                </div>

                {/* Pro plan */}
                <div>
                    <h4 className='text-2xl font-bold px-9 rounded-t-lg pt-14 bg-[#93C64880]'>Basic Plan</h4>
                    <div className='px-9 rounded-b-lg mt-[2px] pt-14 bg-[#93C64880]'>
                        <h2 className='font-bold text-6xl italic'>$23 <span className='text-xl'>/Month</span></h2>
                        <p className='mt-5 mb-8'>Enhance collaboration with real-time chat
                            and advanced reporting.</p>
                        <ul>
                            {
                                proOffers?.map(offer => <li key={offer} className='flex items-center gap-4 mb-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M16 8L8.70711 15.2929C8.31658 15.6834 7.68342 15.6834 7.29289 15.2929L4 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M22 8L14.7071 15.2929C14.3166 15.6834 13.6834 15.6834 13.2929 15.2929L11 13" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>{offer}</span>
                                </li>)
                            }
                        </ul>
                        <button className='font-bold my-9 py-4 rounded-xl mx-auto border border-black w-full'>Choose Plan</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricePlans;