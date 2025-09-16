export function Partner() {
	const partners = [
		{
			image: "https://cdn.imweb.me/thumbnail/20250911/dd4489243e73c.png",
			name: "Foundation for Mother and Child Health",
			desc: "Supports maternal and child health. Through this partnership, users joining via the foundation receive additional incentives, and the foundation actively encourages the use of the BabyBoom app.",
			url: "https://fmch-indonesia.org/",
		},
		{
			image: "https://cdn.imweb.me/thumbnail/20250911/8b5c68d7fd7f7.png",
			name: "FACTBLOCK",
			desc: "Collaborates with BBT at KBW 2025 as a Gold Sponsor, supporting networking and co-hosted events.",
			url: "https://koreablockchainweek.com/",
		},
		{
			image: "https://cdn.imweb.me/thumbnail/20250911/34d5dd181db6c.png",
			name: "EdgeGrid",
			desc: "Partnering with EdgeGrid to advance AI, blockchain, and spatial computing. Their XR devices power real-time AI training, smarter robotics, autonomous vehicles, and AGI. Backed by NVIDIA, with 170K+ active nodes.",
			url: "https://x.com/BabyBoomToken/status/1894229565171716257",
		},
		{
			image: "https://cdn.imweb.me/thumbnail/20250911/59de758e415a4.png",
			name: "Terminus Network",
			desc: "A payment platform linking crypto with real-world finance via QR code payments. Partnered with Creditlink to build on-chain credit solutions for DeFi and everyday transactions.",
			url: "https://x.com/terminus_pos/status/1892810230737883481",
		},
		{
			image: "https://cdn.imweb.me/thumbnail/20250911/c998022963ff7.png",
			name: "WayNetwork",
			desc: "Way Network and BBT are partnering to innovate and elevate technology solutions, pushing boundaries and redefining what’s possible.",
			url: "https://x.com/WayNetwork_Labs/status/1792794941279871403",
		},
		{
			image: "https://cdn.imweb.me/thumbnail/20250911/81aaf98b65fbd.png",
			name: "BaseTech",
			desc: "BBT and BaseTech have entered a transformative partnership to drive innovation and enhance valuefor the community.",
			url: "https://x.com/btc_tick/status/1791827929342832642",
		},
		{
			image: "https://cdn.imweb.me/thumbnail/20250911/29bd0d2487475.png",
			name: "iFlux Global",
			desc: "A CeFi platform offering token installment plans, enabling users to access crypto assets through flexible payment options and increasing adoption.",
			url: "https://x.com/iFluxGlobal/status/1904458238310945025",
		},
		{
			image: "https://cdn.imweb.me/thumbnail/20250911/10daf84c6151c.png",
			name: "StarryNift",
			desc: "Partnering with StarryNift, the AI-powered co-creation platform redefining virtual experiences. Backed by SIG, Binance, OKX, and a 900K+ community, StarryNift bridges Web2 and Web3 through NFTs, AI, and immersive gameplay.",
			url: "https://x.com/BabyBoomToken/status/1902616098677121291",
		},
	];

	return(
		<div className="text-white px-4 py-12">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
					Ecosystem Partners
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{partners.map((partner, i) => (
						<div key={i} className="bg-transparent rounded-md p-4 flex flex-col">
							<a href={partner.url}>
								<div className="flex items-center justify-center h-28 mb-4 border border-gray-700">
									<img
										src={partner.image}
										alt={partner.name}
										className="max-h-20 object-contain grayscale"
									/>
								</div>
								<h3 className="text-cyan-400 font-semibold text-base mb-2">
									{partner.name}
								</h3>
								<p className="text-gray-300 text-sm leading-relaxed flex-1">
									{partner.desc}
								</p>
								<p  className="mt-2 text-sm text-gray-400 hover:text-white">
									→Read more
								</p>
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}