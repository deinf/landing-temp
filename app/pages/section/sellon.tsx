export function Sellon() {
	const keyFeatures = [
		{
			title: "Community Sharing",
			desc: "Post text, images, and short videos, and connect with others through comments and chat. Easily exchange local news and information within your community.",
		},
		{
			title: "Interest Clubs",
			desc: "Join or create clubs based on hobbies, interests, or affiliations to share content, collaborate, and grow smaller community networks.",
		},
		{
			title: "Local Marketplace",
			desc: "Buy, sell, or share secondhand items at low cost or for free. Safe in-person transactions strengthen trust and support the local economy.",
		}
	];

	const howItWorks = [
		{
			icon: "/images/dapps/sellon/create-share-content.png",
			title: "Create & Share Content",
			desc: "Post local updates, news, and interests through text, images, or videos to enrich the community.",
		},
		{
			icon: "/images/dapps/sellon/engage-interact.png",
			title: "Engage & Interact",
			desc: "Comment, chat, and exchange ideas with other users to build stronger local connections",
		},
		{
			icon: "/images/dapps/sellon/community-recognition.png",
			title: "Community Recognition",
			desc: "Earn appreciation and support when your content resonates with others through likes, shares, and engagement.",
		},
		{
			icon: "/images/dapps/sellon/reward-system.png",
			title: "Reward System",
			desc: "Receive BBT for your contributions and interactions, turning community engagement into real value.",
		},
	];

	return(
		<div className="space-y-6">
			<div className="text-center">
				<h2 className="text-cyan-400 text-xl font-semibold pb-7">
					Real-World Utility through BBT DApps
				</h2>
				<h1 className="text-4xl md:text-5xl font-bold pb-4">
					Expanding real-world value through BabyBoom & SellOn
				</h1>
				<p className="text-gray-300">
					BBT powers two unique applications: BabyBoom, supporting the journey of parenthood, and SellOn, transforming community engagement. Together, they create meaningful incentives and expand the utility of BabyBoomToken.
				</p>
			</div>

			<div className="bg-black text-white py-16 px-6">
				<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-20">
					<div className="flex justify-center">
						<img src="/images/dapps/sellon/sellon-apps-mobile.png" className="w-full" alt="sellon-apps" />
					</div>

					<div className="space-y-6">
						<h3 className="text-orange-500 font-semibold text-3xl">Sellon</h3>
						<h1 className="text-4xl md:text-5xl font-bold leading-tight">
							Transforming Community Engagement into Tangible Value
						</h1>
						<p className="text-gray-300 max-w-lg">
							SellOn is a reward-based community platform where users earn BabyBoomToken (BBT) by contributing local content. Powered by real user activity, the app drives organic engagement and plays a key role in expanding BBT’s utility ecosystem.
						</p>

						<a href="https://sellon.net/redirect" className="inline-block text-orange-500 hover:text-orange-400 font-semibold">
							→ Download
						</a>
					</div>
				</div>
			</div>

			<div className="bg-black text-white py-16 px-6 md:px-12">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-orange-500 font-bold text-5xl md:text-6xl leading-tight mb-12">
					Key Features
					</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{keyFeatures.map((feature, i) => (
						<div key={i} className="bg-orange-500 rounded-2xl p-6 shadow-md hover:shadow-lg transition" >
							<h3 className="font-bold text-lg mb-2">{feature.title}</h3>
							<p className="text-white/90 text-sm">{feature.desc}</p>
						</div>
					))}
					</div>
				</div>
			</div>
			
			<div className="bg-black text-white py-16 px-6 md:px-12">
				<h2 className="text-orange-500 text-3xl md:text-4xl font-bold text-center mb-12">
					How it Works
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 max-w-7xl mx-auto">
					{howItWorks.map((howitwork, i) => (
					<div key={i} className="flex flex-col items-center text-center space-y-4" >
						<img src={howitwork.icon} alt={howitwork.title} className="w-60 h-60 object-contain" />
						<h3 className="text-lg font-semibold">{howitwork.title}</h3>
						<div className="w-70 h-[2px] bg-orange-500"></div>
						<p className="text-whitetext-sm">{howitwork.desc}</p>
					</div>
					))}
				</div>
			</div>

		</div>
	);
}