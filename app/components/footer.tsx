export function Footer() {
    return(
        <footer className="bg-black text-white px-6 md:px-12 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-cyan-400 mb-3">Social Media</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-cyan-300">Telegram</a></li>
                        <li><a href="#" className="hover:text-cyan-300">X (Twitter)</a></li>
                        <li><a href="#" className="hover:text-cyan-300">Medium</a></li>
                        <li><a href="#" className="hover:text-cyan-300">LinkedIn</a></li>
                        <li><a href="#" className="hover:text-cyan-300">More...</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-cyan-400 mb-3">BBT on Exchanges</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-cyan-300">CoinMarketCap</a></li>
                        <li><a href="#" className="hover:text-cyan-300">CoinGecko</a></li>
                        <li><a href="#" className="hover:text-cyan-300">MEXC</a></li>
                        <li><a href="#" className="hover:text-cyan-300">Gate.io</a></li>
                        <li><a href="#" className="hover:text-cyan-300">More...</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-cyan-400 mb-3">Audit Report</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:text-cyan-300 flex items-center gap-1">
                                CertiK Report <span className="text-yellow-500">🔒</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-cyan-400 mb-3">Contact Us</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="mailto:support@babyboomtoken.com" className="hover:text-cyan-300">
                                support@babyboomtoken.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}