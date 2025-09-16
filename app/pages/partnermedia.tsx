import { Media } from "./section/partnermedia/media";
import { Partner } from "./section/partnermedia/partner";

export function Partnermedia() {
    return(
        <div className="space-y-6 px-20 pt-20">
			<div className="text-center px-25">
				<h1 className="text-cyan-400 text-4xl font-semibold pb-7">
					Partner & Media
				</h1>
				<h2 className="text-3xl font-bold pb-4">
					Our growing ecosystem of collaborations and global media coverage
				</h2>
				<p className="text-gray-300 pb-4">
					BBT is building an ecosystem powered by NGOs, Web3 innovators, and global events, while gaining recognition in top-tier media outlets. Together, these collaborations strengthen our mission and expand our reach worldwide.
				</p>
                <h3 className="text-cyan-400 text-2xl font-semibold pb-7">Interested in partnering with us? Get in touch today</h3>
			</div>

            <div className="px-4 py-2 text-center border border-cyan-700 w-30 rounded-3xl mb-10 mx-auto text-cyan-700 hover:bg-white cursor-pointer transition-colors">
                <a href="mailto:support@babyboomtoken.com" className="">CONTACT</a>
            </div>

            <Partner />
            <Media />
        </div>
    );
}