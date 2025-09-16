export default function Roadmap() {
	const roadmap = [
		{ date: "2025 Q3", text: "Advertising monetization & market stabilization" },
		{ date: "2025 Q4", text: "Global exchange expansion & reward structure optimization" },
		{ date: "2026 Q1", text: "Service stabilization & community-centered feature upgrades" },
		{ date: "2026 Q2", text: "Foundation asset management & transparency measures" },
		{ date: "2026 Q3", text: "Personalized rewards & enhanced user participation" },
		{ date: "2026 Q4", text: "Global user growth & real-world service integration" },
		{ date: "2027 Q1", text: "Launch BBT Wallet App & expand utility use cases" },
		{ date: "2027 Q2", text: "Community governance & long-term vision anchoring" },
		{ date: "2027 Q3–Q4", text: "Evolution into a full birth-promotion platform" },
	];

	return (
		<div className="text-white py-12 px-6">
			<div className="max-w-5xl">
			<h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-10">
				5. Roadmap (2025–2027)
			</h2>
			<div className="relative">
				<div className="absolute left-4 md:left-6 top-0 h-full border-l-2 border-cyan-500"></div>

				<div className="space-y-10">
					{roadmap.map((item, idx) => (
					<div key={idx} className="relative flex items-start">
						<div className="absolute left-4 md:left-5 mt-2 w-3 h-3 rounded-full bg-cyan-500"></div>

						<div className="ml-10 md:ml-16 w-full">
							<div className="bg-[#0f0f0f] rounded-xl p-5 shadow-md">
							<span className="inline-block bg-cyan-900/50 text-cyan-300 text-xs md:text-sm px-3 py-1 rounded-lg font-semibold mb-3">
								{item.date}
							</span>
							<p className="text-sm md:text-base font-medium leading-relaxed">
								{item.text}
							</p>
							</div>
						</div>
					</div>
					))}
				</div>
			</div>
			</div>
		</div>
	);
}
