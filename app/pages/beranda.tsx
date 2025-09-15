import { motion } from "framer-motion";
import { Dapps } from "./dapps";
import { Businessmodel } from "./businessmodel";

export function Beranda() {
  return (
    <div className="flex flex-col">
      
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-400 to-blue-600 text-white text-center p-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Social Impact, Powered by Web3 Innovation
        </motion.h1>

        <motion.p
          className="max-w-2xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore accusamus exercitationem optio nemo ea explicabo sed. Fugit nesciunt officiis, tempora ab, harum, adipisci ipsum hic rem inventore dicta doloremque dignissimos?
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <button className="bg-white text-blue-600 px-6 py-2 rounded-2xl font-semibold shadow hover:bg-gray-100">
            Start Your Wellness Journey
          </button>
          <button className="border border-white px-6 py-2 rounded-2xl font-semibold hover:bg-white/10">
            Whitepaper
          </button>
        </motion.div>

        <motion.img
          src="https://cdn.imweb.me/thumbnail/20250907/3f7b16f033829.png"
          alt="Phone with app"
          className="mt-12 w-64 md:w-80 drop-shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </section>

      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Healthier Habits, Earn BBT Rewards</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Get smart wellness coaching for fertility and overall health. Build meaningful
            habits and earn rewards while improving your life.
          </p>
          <a href="#" className="text-blue-400 underline font-medium">
            Learn More →
          </a>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Advisors</h2>
          <div className="grid md:grid-cols-3 gap-10">
          
            <div className="flex flex-col items-center text-gray-700">
              <img src="https://cdn.imweb.me/thumbnail/20250908/cb9a8aab927ef.png" alt="Advisor" className="w-32 h-32 rounded-full mb-4 object-cover" />
              <h3 className="font-semibold text-lg">Justin Baird</h3>
              <p className="text-sm text-gray-600">Technology Advisor</p>
              <p className="mt-2 text-sm max-w-xs">
                Former CTO of Innovation for Sanap (ABC and Telstra), Justin advises on core tech
                development at EasyBBT, ensuring scalable solutions.
              </p>
            </div>
            <div className="flex flex-col items-center text-gray-700">
              <img src="https://cdn.imweb.me/thumbnail/20250908/cb9a8aab927ef.png" alt="Advisor" className="w-32 h-32 rounded-full mb-4 object-cover" />
              <h3 className="font-semibold text-lg">Dr. Shinya Nabila</h3>
              <p className="text-sm text-gray-600">Medical & Health Advisor</p>
              <p className="mt-2 text-sm max-w-xs">
                Experienced medical professional with expertise in fertility health and wellness.
              </p>
            </div>
            <div className="flex flex-col items-center text-gray-700">
              <img src="https://cdn.imweb.me/thumbnail/20250908/cb9a8aab927ef.png" alt="Advisor" className="w-32 h-32 rounded-full mb-4 object-cover" />
              <h3 className="font-semibold text-lg">Jennifer Urban</h3>
              <p className="text-sm text-gray-600">Medical Advisor</p>
              <p className="mt-2 text-sm max-w-xs">
                Obstetrician and Gynecologist at Johns Hopkins School of Medicine, guiding
                EasyBBT on clinical data integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <img src="https://cdn.imweb.me/thumbnail/20250912/e5e753e7718c6.png" alt="Partner 1" className="mx-auto h-10" />
            <img src="https://cdn.imweb.me/thumbnail/20250912/e5e753e7718c6.png" alt="Partner 2" className="mx-auto h-10" />
            <img src="https://cdn.imweb.me/thumbnail/20250912/e5e753e7718c6.png" alt="Partner 3" className="mx-auto h-10" />
            <img src="https://cdn.imweb.me/thumbnail/20250912/e5e753e7718c6.png" alt="Partner 4" className="mx-auto h-10" />
            
          </div>
        </div>
      </section>

      <div className="bg-gray-500 pb-5 text-center text-xl">dApps</div>
      <Dapps />
      <div className="bg-gray-500 pb-5">Business Model</div>
      <Businessmodel />
      <div className="bg-gray-500 pb-5"></div>

    </div>
  );
}
