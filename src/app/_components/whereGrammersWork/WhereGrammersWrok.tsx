import Marquee from "react-fast-marquee"

const data = [
	"Amex",
	"Nvidia",
	"City of Atlanta",
	"City Furniture",
	"Amazon",
	"Vertafore",
	"Cypher Learning",
	"USPS",
	"FPL",
	"Manit",
]

const WhereGrammersWork = () => {
	return (
		<div className="bg-white pt-24">
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<h2 className='text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>Where Grammers work</h2>

				<Marquee
					className="mt-24"
				>
					{data.map((location, index) =>
						<p
							key={index}
							className="text-pretty text-3xl tracking-tight text-gray-900 mr-20"
						>
							{location}
						</p>
					)}
				</Marquee>
			</div>
		</div>
	)
}

export default WhereGrammersWork
