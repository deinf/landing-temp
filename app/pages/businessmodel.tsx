export function Businessmodel() {
    const businessKey = [
        {
            id: "01",
            title: "User Engagement & Traffic Growth",
            desc: "DApp users receive BBT tokens as rewards for tracking health habits, joining community activities, and participating in surveys. This incentivized participation drives traffic growth, strengthens community interaction, and expands valuable datasets.",
            border: "border-l-3 border-red-700",
        },
        {
            id: "02",
            title: "Data Monetization (Health & Survey Data)",
            desc: "Collected data is anonymized and shared with partners to create real-world value.",
            list: [
                "Insurance companies: Develop tailored insurance products using lifestyle insights.",
                "Healthcare startups: Train health AI models with real-world datasets.",
                "Public institutions & NGOs: Support demographic research and wellness campaigns.",
            ],
            border: "border-l-3 border-yellow-500",
        },
        {
            id: "03",
            title: "Advertising Revenue",
            desc: "High user traffic opens opportunities for in-app advertising and brand collaborations.",
            list: [
                "Banner ads from wellness and lifestyle brands",
                "Joint campaigns with healthcare initiatives",
            ],
            border: "border-l-3 border-cyan-300",
        },
        {
            id: "04",
            title: "Personalized Product Sales",
            desc: "User data enables customized health and wellness product recommendations.",
            list: [
                "Nutritional supplements",
                "Fertility and childcare support packages",
                "Online fitness and wellness programs",
            ],
            border: "border-l-3 border-cyan-900",
        },
        {
            id: "05",
            title: "Token Buyback & Value Stabilization",
            desc: "A portion of generated revenue is used to repurchase BBT tokens in the open market. Repurchased tokens may be burned or reinvested into the reward pool, ensuring long-term price stability, sustainable demand, and stronger token value.",
            list: [],
            border: "border-l-3 border-pink-800",
        },
        {
            id: "06",
            title: "Virtuous Cycle",
            desc: "This integrated model creates a self-reinforcing loop: User Engagement → Data & Revenue → Token Buyback → Value Stability → More Engagement.",
            list: [],
            border: "border-l-3 border-cyan-300",
        },
    ];

    return(
        <div className="space-y-6 px-20 pt-20">
			<div className="text-center px-25">
				<h2 className="text-cyan-400 text-4xl font-semibold pb-7">
					Business Model
				</h2>
				<h1 className="text-3xl font-bold pb-4">
					Creating sustainable value through engagement, data, and tokenization
				</h1>
				<p className="text-gray-300">
					The BBT business model goes beyond simple rewards. By combining user engagement, data monetization, advertising, and personalized services with a recurring token buyback cycle, we create a sustainable ecosystem that ensures stability, trust, and long-term growth
				</p>
			</div>

            <div className="text-white py-16 px-6">
				<div className="max-w-5xl mx-auto">
                    <img src="/images/business-model.png" className="w-full" alt="business-model" />
				</div>
			</div>

            <div className="text-white px-4 py-12">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    {businessKey.map((item, i) => (
                        <div key={i} className={`bg-zinc-900 rounded-2xl p-6 shadow-md ${item.border}`} >
                            <span className="text-sm font-bold mb-3 block text-gray-300">
                                {item.id}
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold mb-4">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 mb-3">{item.desc}</p>
                                {item.list && (
                                <ul className="list-disc list-inside text-gray-400 space-y-1">
                                    {item.list.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}