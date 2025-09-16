import { motion } from "framer-motion";
import { Dapps } from "./dapps";
import { Businessmodel } from "./businessmodel";
import { Partnermedia } from "./partnermedia";

export function Beranda() {
  const stats = [
    {
      title: "Total Registered Users",
      value: "740K",
      desc: "Rapid growth since 2023 launch, in line with BBT ecosystem expansion",
    },
    {
      title: "Daily Active Users",
      value: "90K",
      desc: "Approx. 27.9% of total users; high activity level for a reward-based app",
    },
    {
      title: "Monthly Active Users",
      value: "340K",
      desc: "2.77x DAU; indicates sustainable user engagement",
    },
    {
      title: "7-Day Retention",
      value: "28%",
      desc: "Strong retention considering reward-centric user behavior",
    },
  ];

  const partners = [
		{
			image: "https://cdn.imweb.me/thumbnail/20250911/dd4489243e73c.png",
			name: "Foundation for Mother and Child Health",
		},
		{
			image: "https://cdn.imweb.me/thumbnail/20250911/8b5c68d7fd7f7.png",
			name: "FACTBLOCK",
		},
    {
			image: "https://cdn.imweb.me/thumbnail/20250911/29bd0d2487475.png",
			name: "iFlux Global",
		},
    {
			image: "https://cdn.imweb.me/thumbnail/20250911/10daf84c6151c.png",
			name: "StarryNift",
		},
		{
			image: "https://cdn.imweb.me/thumbnail/20250911/34d5dd181db6c.png",
			name: "EdgeGrid",
		},
		{
			image: "https://cdn.imweb.me/thumbnail/20250911/59de758e415a4.png",
			name: "Terminus Network",
		},
		{
			image: "https://cdn.imweb.me/thumbnail/20250911/c998022963ff7.png",
			name: "WayNetwork",
		},
		{
			image: "https://cdn.imweb.me/thumbnail/20250911/81aaf98b65fbd.png",
			name: "BaseTech",
		},
		{
			image: "https://cdn.imweb.me/thumbnail/20250911/909060912ca2e.png",
			name: "COINTELEGRAPH",
		},
		{
			image: "https://cdn.imweb.me/thumbnail/20250911/e97f2bae803dc.png",
			name: "PANEWS",
		},
		{
			image: "https://cdn.imweb.me/thumbnail/20250911/3239cb3d1f94f.png",
			name: "BUSINESSINSIDER",
		},
		{
			image: "https://cdn.imweb.me/thumbnail/20250911/47f70b6c0abbb.png",
			name: "BENZINGA",
		},
		{
			image: "https://cdn.imweb.me/thumbnail/20250912/1a0ce13a1b31c.png",
			name: "MARKETWATCH",
		},
		{
			image: "https://cdn.imweb.me/thumbnail/20250911/6ab4618302746.png",
			name: "APNEWS",
		},
		{
			image: "https://cdn.imweb.me/thumbnail/20250911/3b14bcae4ee98.png",
			name: "STREETINSIDER",
		},
		{
			image: "https://cdn.imweb.me/thumbnail/20250911/d7a67e91d3e5d.png",
			name: "MORNINGSTAR",
		},
		{
			image: "https://cdn.imweb.me/thumbnail/20250912/8f3446cac411a.png",
			name: "YAHOO FINANCE",
		},
	];

  return (
    <div className="flex flex-col">
      
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-cyan-400 to-blue-600 text-white text-center p-6">
        <motion.h1
          className="text-4xl md:text-7xl font-bold mb-6 mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Social Impact, <br />Powered by<br /> Web3 Innovation
        </motion.h1>

        <motion.h3
          className="max-w-2xl text-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Tackling the Global Declining Birth Rate
        </motion.h3>

        <motion.p
          className="max-w-2xl text-xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Around the world, families are having fewer children, and the future feels uncertain. BabyBoomToken (BBT) was created to inspire hope combining healthy habits and meaningful rewards that not only improve personal well-being but also encourage family growth where it’s needed most.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <button className="bg-white text-blue-600 px-6 py-2 rounded-2xl font-semibold shadow hover:bg-gray-100 cursor-pointer">
            <a href="https://bbt.babyboomtoken.com/redirect">Start Your Wellness Journey</a>
          </button>
          <button className="border border-white px-6 py-2 rounded-2xl font-semibold hover:bg-white/10 cursor-pointer">
            <a href="https://babyboomtoken.imweb.me/Whitepaper">Whitepaper</a>
          </button>
        </motion.div>

        <motion.img
          src="https://cdn.imweb.me/thumbnail/20250907/3f7b16f033829.png"
          alt="Phone with app"
          className="mt-12 w-64 md:w-[500px] drop-shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </section>

      <section className="bg-black text-white py-20 px-6">
        {/* <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Healthier Habits, Earn BBT Rewards</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Get smart wellness coaching for fertility and overall health. Build meaningful
            habits and earn rewards while improving your life.
          </p>
          <a href="#" className="text-blue-400 underline font-medium">
            Learn More →
          </a>
        </div> */}

        <div className="bg-black text-white">
          <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            <div className="space-y-5 text-center md:text-left">
              <p className="text-cyan-400 font-semibold">Baby Boom</p>
              <h1 className="text-3xl md:text-4xl font-bold leading-snug">
                Building Healthier Habits, <br />
                Earn BBT Rewards
              </h1>
              <p className="text-gray-400">
                Smart wellness coaching for fertility and overall health
              </p>
              <a
                href="#"
                className="inline-block text-cyan-400 font-semibold hover:underline"
              >
                Learn More →
              </a>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden bg-black">
                <img
                  src="/images/hero.png"
                  alt="Hero"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-cyan-400 text-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow" >
              <p className="text-sm font-semibold text-white/80">
                {stat.title}
              </p>
              <h2 className="text-3xl font-bold mt-2">{stat.value}</h2>
              <p className="text-sm mt-2 leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-cyan-500 mb-12">Advisors</h2>
          <div className="grid md:grid-cols-3 gap-10">
          
            <div className="flex flex-col items-center text-white">
              <div className="h-full max-h-96 mb-2">
                <h3 className="font-semibold text-lg">Justin Baird</h3>
                <p className="text-sm">Technology Advisor</p>
                <p className="mt-2 text-sm max-w-xs">
                  Former CTO at Microsoft for Startups APAC and early innovation leader at Google. At BabyBoom, Justin advises on app development and technology strategy.
                </p>
              </div>
              <img src="https://cdn.imweb.me/thumbnail/20250908/6917f93dbd5b9.png" alt="Advisor" className="w-60 h-60 mb-4 object-cover" />
            </div>
            <div className="flex flex-col items-center text-white">
              <div className="h-full max-h-96 mb-2">
                <h3 className="font-semibold text-lg">Dr. Shintya Nabilla</h3>
                <p className="text-sm">Medical & Health Advisor</p>
                <p className="mt-2 text-sm max-w-xs">
                  Experienced professional in health technology and medical systems. At BabyBoom, Shintya provides expert guidance on health-related features and ensures our app’s medical claims and pathways reflect both clinical rigor and user wellbeing. 
                </p>
              </div>

              <img src="https://cdn.imweb.me/thumbnail/20250908/3bb1992f06f1a.png" alt="Advisor" className="w-60 h-60 mb-4 object-cover" />
            </div>
            <div className="flex flex-col items-center text-white">
              <div className="h-full max-h-96 mb-2">
                <h3 className="font-semibold text-lg">Jennifer Uriah</h3>
                <p className="text-sm">Medical Advisor</p>
                <p className="mt-2 text-sm max-w-xs">
                  Obstetrician and Gynecologist at Atma Jaya Hospital and Cinta Kasih Tzu Chi Hospital. At BBT, Jennifer advises on medical data integration and health strategy. 
                </p>
              </div>
              <img src="https://cdn.imweb.me/thumbnail/20250913/ab1ceb9bd5ca6.png" alt="Advisor" className="w-60 h-60 mb-4 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-cyan-500 mb-12">Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <img src="https://cdn.imweb.me/thumbnail/20250912/e5e753e7718c6.png" alt="Partner 1" className="mx-auto h-10" />
            <img src="https://cdn.imweb.me/thumbnail/20250912/e5e753e7718c6.png" alt="Partner 2" className="mx-auto h-10" />
            <img src="https://cdn.imweb.me/thumbnail/20250912/e5e753e7718c6.png" alt="Partner 3" className="mx-auto h-10" />
            <img src="https://cdn.imweb.me/thumbnail/20250912/e5e753e7718c6.png" alt="Partner 4" className="mx-auto h-10" />
          </div>
        </div>
      </section> */}
      <section>
        <div className="bg-black text-white px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Partners
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {partners.map((partner, i) => (
                <div key={i} className="bg-transparent rounded-md p-4 flex flex-col">
                  <div className="flex items-center justify-center mb-4">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="object-contain w-96 h-96"
                    />
                  </div>
                  <h3 className="text-cyan-400 font-semibold text-sm mb-2">
                    {partner.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-500 pb-5 text-center text-xl">dApps</div>
      <Dapps />
      <div className="bg-gray-500 pb-5 text-center text-xl">Business Model</div>
      <Businessmodel />
      <div className="bg-gray-500 pb-5 text-center text-xl">Partner & Media</div>
      <Partnermedia />
      <div className="bg-gray-500 pb-5"></div>

    </div>
  );
}
