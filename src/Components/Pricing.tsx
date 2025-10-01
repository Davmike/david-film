

function Pricing() {
    const pricingPlans = [
        {
            title: "Documentary Films",
            services: [
                "Short Documentary Films",
                "Corporate & Historical Videos",
                "Interviews & Reportage",
                "Video Chronicles for Social & Cultural Projects",
            ],
            price: "$1200",
        },
        {
            title: "Wedding",
            services: [
                "Short Documentary Films",
                "Corporate & Historical Videos",
                "Interviews & Reportage",
                "Video Chronicles for Social & Cultural Projects",
            ],
            price: "$1200",
        },
        {
            title: "Event Videography",
            services: [
                "Short Documentary Films",
                "Corporate & Historical Videos",
                "Interviews & Reportage",
                "Video Chronicles for Social & Cultural Projects",
            ],
            price: "$1200",
        },
        {
            title: "Sports Videography",
            services: [
                "Short Documentary Films",
                "Corporate & Historical Videos",
                "Interviews & Reportage",
                "Video Chronicles for Social & Cultural Projects",
            ],
            price: "$1200",
        },
    ];

    return (
        <div className="bg-black py-20 px-6 mt-[200px]">
            <h2 className="text-white text-4xl font-light tracking-widest text-center mb-12 uppercase">
                Pricing
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {pricingPlans.map((plan, idx) => (
                    <div
                        key={idx}
                        className="bg-black border border-gray-700 rounded-2xl p-6 flex flex-col justify-between shadow-md"
                    >
                        <div>
                            <h3 className="text-white text-xl font-medium mb-4">{plan.title}</h3>
                            <hr className="border-gray-700 mb-4" />
                            <p className="text-gray-300 mb-2 font-light">Services:</p>
                            <ul className="text-gray-400 space-y-2 mb-6">
                                {plan.services.map((service, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-white">•</span> {service}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="text-white text-2xl font-semibold tracking-widest text-center">
                            {plan.price}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pricing;