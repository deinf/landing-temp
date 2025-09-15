export function Babyboom() {
	const keyFeatures = [
		{
			title: "Pregnancy Incentive Rewards",
			desc: "Encourages healthy pregnancy for both men and women.",
		},
		{
			title: "Childbirth Event Rewards",
			desc: "Greater rewards for participating in childbirth events.",
		},
		{
			title: "Community for Moms",
			desc: "A community board for pregnancy, parenting, and childbirth discussions.",
		},
		{
			title: "Daily Health tracker",
			desc: "Monitor exercise, nutrition, sleep, stress, and hydration.",
		},
		{
			title: "Survey",
			desc: "Participate in surveys, earn rewards, and shape future wellness programs.",
		}
	];

	const howItWorks = [
		{
			icon: "/images/dapps/babyboom/health-habit-tracking.png",
			title: "Health Habit Tracking",
			desc: "Daily check-ins to track wellness habits and earn rewards.",
		},
		{
			icon: "/images/dapps/babyboom/educational-content-coaching.png",
			title: "Educational Content & Coaching",
			desc: "Health tips, fertility-friendly advice, and community-sourced guidance.",
		},
		{
			icon: "/images/dapps/babyboom/community-support.png",
			title: "Community Support",
			desc: "Connect with peers, join group challenges, and share encouragement.",
		},
		{
			icon: "/images/dapps/babyboom/reward-system.png",
			title: "Reward System",
			desc: "Earn BBT for consistency, participation, and engagement.",
		}
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
						<img src="/images/dapps/babyboom/babyboom-apps-mobile.png" className="w-full" alt="babyboom-apps" />
					</div>

					<div className="space-y-6">
						<h3 className="text-cyan-400 font-semibold text-3xl">BabyBoom</h3>
						<h1 className="text-4xl md:text-5xl font-bold leading-tight">
							Where new life <br /> begins with <br /> real rewards
						</h1>
						<p className="text-gray-300 max-w-lg">
							BabyBoom is a next-generation pregnancy and parenting support app
							that integrates blockchain-based reward systems. By encouraging
							positive behaviors throughout the journey to parenthood, the app
							addresses declining birthrates and empowers users with tangible
							benefits through BabyBoomToken (BBT).
						</p>

						<a href="https://bbt.babyboomtoken.com/redirect" className="inline-block text-cyan-400 hover:text-cyan-300 font-semibold">
							→ Download
						</a>
					</div>
				</div>
			</div>

			<div className="bg-black text-white py-16 px-6 md:px-12">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-cyan-400 font-bold text-5xl md:text-6xl leading-tight mb-12">
					Key Features
					</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{keyFeatures.map((feature, i) => (
						<div key={i} className="bg-cyan-500 rounded-2xl p-6 shadow-md hover:shadow-lg transition" >
							<h3 className="font-bold text-lg mb-2">{feature.title}</h3>
							<p className="text-white/90 text-sm">{feature.desc}</p>
						</div>
					))}
					</div>
				</div>
			</div>
			
			<div className="bg-black text-white py-16 px-6 md:px-12">
				<h2 className="text-cyan-400 text-3xl md:text-4xl font-bold text-center mb-12">
					How it Works
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 max-w-7xl mx-auto">
					{howItWorks.map((howitwork, i) => (
					<div key={i} className="flex flex-col items-center text-center space-y-4" >
						<img src={howitwork.icon} alt={howitwork.title} className="w-60 h-60 object-contain" />
						<h3 className="text-lg font-semibold">{howitwork.title}</h3>
						<div className="w-70 h-[2px] bg-cyan-400"></div>
						<p className="text-gray-300 text-sm">{howitwork.desc}</p>
					</div>
					))}
				</div>
			</div>

		</div>
	);
}