export default function Tokendistribution() {
	const data = [
		{
			no: 1,
			item: "Active Reward",
			wallet: "0x2B1F754DA3c46Cc7741B206FC741F0D0AEf95dD8",
			rate: "30.00%",
			quantity: "300,000,000",
			remaining: "300,000,000",
			circulating: "300,000,000",
			remarks: "",
		},
		{
			no: 2,
			item: "Ecosystem / Treasury",
			wallet: "0x53c3891e18670b86CFB6e5E372C62349e82f2F65",
			rate: "20.00%",
			quantity: "200,000,000",
			remaining: "200,000,000",
			circulating: "200,000,000",
			remarks: "",
		},
		{
			no: 3,
			item: "Strategic Sales",
			wallet: "multiple wallet addresses to various investors",
			rate: "10.00%",
			quantity: "100,000,000",
			remaining: "100,000,000",
			circulating: "100,000,000",
			remarks: "",
		},
		{
			no: 4,
			item: "R&D",
			wallet: "0x9A3195F27E65EBc5060915B17d9df99DaD6b4355",
			rate: "10.00%",
			quantity: "100,000,000",
			remaining: "100,000,000",
			circulating: "100,000,000",
			remarks: "",
		},
		{
			no: 5,
			item: "Foundation",
			wallet: "0xc1364D9CDec5C7C817cab3be81DaE7049b49ecc8",
			rate: "10.00%",
			quantity: "100,000,000",
			remaining: "100,000,000",
			circulating: "100,000,000",
			remarks: "",
		},
		{
			no: 6,
			item: "Team",
			wallet: "0xC50c1e29699ACB98aafb0a3BaC170C3696e8C58",
			rate: "8.00%",
			quantity: "80,000,000",
			remaining: "80,000,000",
			circulating: "80,000,000",
			remarks: "",
		},
		{
			no: 7,
			item: "Advisor",
			wallet: "0x00C944134D9244351e6A96e1163992675352A1A9",
			rate: "7.00%",
			quantity: "70,000,000",
			remaining: "70,000,000",
			circulating: "70,000,000",
			remarks: "",
		},
		{
			no: 8,
			item: "Marketing",
			wallet: "0x9148099D43bb4c250eB365441Dc93A39fe151850",
			rate: "5.00%",
			quantity: "50,000,000",
			remaining: "50,000,000",
			circulating: "50,000,000",
			remarks: "",
		},
	];

	return (
		<section className="text-white py-12">
			<div className="max-w-7xl">
				<div className="overflow-x-auto">
					<table className="w-full border border-gray-700 text-sm md:text-base">
						<thead className="bg-[#0f0f0f] text-cyan-400">
							<tr>
								<th className="px-4 py-3 border border-gray-700">NO</th>
								<th className="px-4 py-3 border border-gray-700">Item</th>
								<th className="px-4 py-3 border border-gray-700">Wallet Address</th>
								<th className="px-4 py-3 border border-gray-700">Distribution Rate (%)</th>
								<th className="px-4 py-3 border border-gray-700">Distribution Quantity</th>
								<th className="px-4 py-3 border border-gray-700">Remaining Quantity in Wallet</th>
								<th className="px-4 py-3 border border-gray-700">Circulating Quantity</th>
								<th className="px-4 py-3 border border-gray-700">Remarks</th>
							</tr>
						</thead>
						<tbody>
							{data.map((row, i) => (
								<tr key={i} className="border-b border-gray-700">
									<td className="px-4 py-3 text-center border border-gray-700">{row.no}</td>
									<td className="px-4 py-3 font-semibold border border-gray-700">{row.item}</td>
									<td className="px-4 py-3 break-all border border-gray-700">{row.wallet}</td>
									<td className="px-4 py-3 text-center border border-gray-700">{row.rate}</td>
									<td className="px-4 py-3 text-right border border-gray-700">{row.quantity}</td>
									<td className="px-4 py-3 text-right border border-gray-700">{row.remaining}</td>
									<td className="px-4 py-3 text-right border border-gray-700">{row.circulating}</td>
									<td className="px-4 py-3">{row.remarks}</td>
								</tr>
							))}

							<tr className="bg-gray-900 font-bold text-cyan-400">
								<td className="px-4 py-3 text-left" colSpan={3}>Total</td>
								<td className="px-4 py-3 text-center">100%</td>
								<td className="px-4 py-3 text-right">1,000,000,000</td>
								<td className="px-4 py-3 text-right">1,000,000,000</td>
								<td className="px-4 py-3 text-right">1,000,000,000</td>
								<td className="px-4 py-3">-</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
}