import Roadmap from "./section/whitepaper/roadmap";
import Tokendistribution from "./section/whitepaper/tokendistribution";

export function Whitepaper() {
    return(
        <div className="space-y-6 pt-20 text-center mb-20">
            <h1 className="text-2xl md:text-6xl text-cyan-500 font-bold">BabyBoomToken (BBT) Whitepaper v2.0</h1>
            <h5 className="text-2xl text-gray-400">September 2025</h5>
            <div className="text-left mx-20">
                <div>
                    <h3 className="text-2xl text-cyan-500 font-bold">Update History</h3>
                    <ul className="list-disc ml-5">
                        <li>v2.0 (2025): Updated tokenomics allocation, expanded roadmap (to 2027), integrated business model, ecosystem narrative. Advisors/Partners/Media moved to official website.</li>
                        <li>v1.0 (2023): Initial release (LINK →)</li>
                    </ul>
                </div>
                <div className="pt-5">
                    <h3 className="text-2xl text-cyan-500 font-bold">1. Introduction</h3>
                    <h5 className="text-lg mb-1">Shape the Future with BabyBoomToken</h5>
                    <h5 className="text-lg mb-1">Social Impact Powered by Web3 Innovation</h5>
                    <p className="text-sm">BabyBoomToken (BBT) is a Web3 project that transforms social impact into tangible rewards. By integrating blockchain-powered incentives into daily life, BBT addresses one of the most pressing global challenges—declining birthrates—while fostering community engagement and creating a sustainable token economy.</p>
                </div>
                <div className="pt-5">
                    <h3 className="text-2xl text-cyan-500 font-bold">2. BBT dApp Ecosystem</h3>
                    <div className="flex flex-col md:flex-row gap-10 py-10">
                        <img src="/images/dapps/babyboom/babyboom-apps-mobile.png" className="w-60 h-60" alt="babyboom" />
                        <div>
                            <h3>BabyBoom App</h3>
                            <ul className="list-disc ml-7">
                                <li>Purpose: Pregnancy and parenting support</li>
                                <li>Rewards: From conception to childbirth, users earn escalating rewards</li>
                                <li>Features:
                                    <ul className="list-disc ml-15">
                                        <li>Pregnancy Incentive Rewards</li>
                                        <li>Childbirth Event Rewards</li>
                                        <li>Community for Moms</li>
                                        <li>Daily Health Tracker & Surveys</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-10 py-10">
                        <img src="/images/dapps/sellon/sellon-apps-mobile.png" className="w-60 h-60" alt="sellon" />
                        <div>
                            <h3>Sellon App</h3>
                            <ul className="list-disc ml-7">
                                <li>Purpose: Hyperlocal community engagement</li>
                                <li>Rewards: Contribute content, join clubs, trade items, and earn BBT</li>
                                <li>Features:
                                    <ul className="list-disc ml-15">
                                        <li>Community Sharing (posts, videos, images)</li>
                                        <li>Interest Clubs (hobby & lifestyle groups)</li>
                                        <li>Local Marketplace (buy/sell secondhand goods)</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h5 className="text-lg mb-1">Future Expansion</h5>
                    <p className="text-sm">Additional dApps will be launched to expand the real-world use cases of BBT.</p>
                </div>
                <div className="pt-5">
                    <h3 className="text-2xl text-cyan-500 font-bold pb-2">3. Tokenomics</h3>
                    <p className="text-sm pb-2">Total Supply: 1,000,000,000 BBT (1 Billion)</p>
                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-700 text-left text-sm md:text-base">
                            <tbody>
                                <tr className="border-b border-gray-700 last:border-none" >
                                    <td className="px-4 py-3 font-semibold text-cyan-400 w-1/3 bg-[#0f0f0f]">Project Name</td>
                                    <td className="px-4 py-3">BBT</td>
                                </tr>
                                <tr className="border-b border-gray-700 last:border-none" >
                                    <td className="px-4 py-3 font-semibold text-cyan-400 w-1/3 bg-[#0f0f0f]">Chain</td>
                                    <td className="px-4 py-3">BSC</td>
                                </tr>
                                <tr className="border-b border-gray-700 last:border-none" >
                                    <td className="px-4 py-3 font-semibold text-cyan-400 w-1/3 bg-[#0f0f0f]">Ticker</td>
                                    <td className="px-4 py-3">BBT</td>
                                </tr>
                                <tr className="border-b border-gray-700 last:border-none" >
                                    <td className="px-4 py-3 font-semibold text-cyan-400 w-1/3 bg-[#0f0f0f]">Total Supply</td>
                                    <td className="px-4 py-3">1,000,000,000</td>
                                </tr>
                                <tr className="border-b border-gray-700 last:border-none" >
                                    <td className="px-4 py-3 font-semibold text-cyan-400 w-1/3 bg-[#0f0f0f]">BscScan</td>
                                    <td className="px-4 py-3"><a href="https://bscscan.com/token/0xb208063997dB51DE3f0988F8A87b0aff83a6213F" className="underline">View on BscScan</a></td>
                                </tr>
                            </tbody>
                        </table>
                        <h3 className="py-5"><span className="px-3.5 py-1 bg-white rounded-lg mr-2"></span>Token Distribution Wallet and Quantity Status</h3>
                        <Tokendistribution />
                    </div>
                </div>
                <div className="pt-5">
                    <h3 className="text-2xl text-cyan-500 font-bold">4. Business Model</h3> 
                    <h5 className="text-lg mb-1">BBT creates sustainable value through a virtuous cycle:</h5>
                    <ul className="list-disc ml-8 text-sm">
                        <li>User Engagement & Traffic Growth – Rewards for health tracking, surveys, community activity</li>
                        <li>Data Monetization – Anonymized health & survey data shared with insurance, healthcare, NGOs</li>
                        <li>Advertising Revenue – Banner ads, joint health campaigns</li>
                        <li>Personalized Product Sales – Supplements, fertility packages, wellness programs</li>
                        <li>Token Buyback & Value Stabilization – Revenue used to buy back tokens, stabilize value</li>
                    </ul>
                </div>
                <Roadmap />
                <div className="pt-5">
                    <h3 className="text-2xl text-cyan-500 font-bold">6. Advisors, Partners & Media</h3> 
                    <h5 className="text-lg mb-1">Advisors, partners, and media coverage are continuously updated.</h5>
                    <h5 className="text-lg mb-1">To ensure transparency and accuracy, this information is maintained on our official website rather than in the whitepaper.</h5>
                </div>
                <div className="pt-5">
                    <h3 className="text-2xl text-cyan-500 font-bold">7. Conclusion</h3> 
                    <h5 className="text-lg mb-1">BBT combines real-world social impact with Web3 innovation to build a sustainable token economy. By rewarding meaningful activities—family formation, health, and community engagement—BBT creates both personal value and collective benefit.</h5>
                </div>
            </div>
        </div>
    );
}