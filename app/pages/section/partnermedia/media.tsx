export function Media() {
	const medias = [
		{
			image: "https://cdn.imweb.me/thumbnail/20250911/e355c1c7847a6.png",
			name: "COINTELEGRAPH",
			url: "https://fmch-indonesia.org/",
		},
		{
			image: "https://cdn.imweb.me/thumbnail/20250911/2ab0a2b9c5625.png",
			name: "PANEWS",
			url: "https://www.panewslab.com/ko/articles/k170ktfu",
		},
		{
			image: "https://cdn.imweb.me/thumbnail/20250911/f4e42016d0aee.png",
			name: "BUSINESS INSIDER",
			url: "https://markets.businessinsider.com/news/stocks/babyboomtoken-surges-after-bingx-listing-u-s-traffic-spike-crashes-app-servers-1034885166",
		},
		{
			image: "https://cdn.imweb.me/thumbnail/20250911/8ac3f4164ebe5.png",
			name: "BENZINGA",
			url: "https://www.benzinga.com/pressreleases/25/07/g46337721/babyboomtoken-surges-after-bingx-listing-u-s-traffic-spike-crashes-app-servers",
		},
		{
			image: "https://cdn.imweb.me/thumbnail/20250911/33d1425c751e8.png",
			name: "MARKETWATCH",
			url: "https://www.benzinga.com/pressreleases/25/05/g45288860/bbt-the-worlds-first-crypto-project-realizing-trumps-baby-bonus",
		},
		{
			image: "https://cdn.imweb.me/thumbnail/20250911/5757dd875cf40.png",
			name: "APNEWS",
			url: "https://apnews.com/press-release/globenewswire-mobile/babyboomtoken-surges-after-bingx-listing-u-s-traffic-spike-crashes-app-servers-a828f9c9bf6c1ebbf1a4f32592734d7a",
		},
		{
			image: "https://cdn.imweb.me/thumbnail/20250911/4b2f0aa55ee71.png",
			name: "STREETINSIDER",
			url: "https://www.streetinsider.com/Globe+Newswire/BabyBoomToken+Surges+After+BingX+Listing+%E2%80%93+U.S.+Traffic+Spike+Crashes+App+Servers/25035263.html",
		},
		{
			image: "https://cdn.imweb.me/thumbnail/20250911/b2fcaa16819d6.png",
			name: "MORNINGSTAR",
			url: "https://www.morningstar.com/news/globe-newswire/9492225/babyboomtoken-surges-after-bingx-listing-us-traffic-spike-crashes-app-servers",
		},
		{
			image: "https://cdn.imweb.me/thumbnail/20250911/9962d43cf9137.png",
			name: "YAHOO FINANCE",
			url: "https://sg.finance.yahoo.com/news/babyboomtoken-foundation-partners-sellon-introduce-143300562.html",
		},
	];

	return(
		<div className="text-white px-4 py-12">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
					Media Partners
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{medias.map((media, i) => (
						<div key={i} className="bg-transparentrounded-md p-4 flex flex-col">
							<a href={media.url}>
								<div className="flex items-center justify-center h-28 mb-4 border border-gray-700">
									<img
										src={media.image}
										alt={media.name}
										className="max-h-20 object-contain grayscale"
									/>
								</div>
								<h3 className="text-cyan-400 font-semibold text-base">
									{media.name}
								</h3>
								<p className="text-sm text-gray-400 hover:text-white">
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