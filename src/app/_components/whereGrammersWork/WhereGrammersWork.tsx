import Marquee from "react-fast-marquee"

const data = [
	{
		_id: 1,
		location: "Amex"
	},
	{
		_id: 2,
		location: "Nvidia"
	},
	{
		_id: 3,
		location: "City of Atlanta"
	},
	{
		_id: 4,
		location: "City Furniture"
	},
	{
		_id: 5,
		location: "Amazon"
	},
	{
		_id: 6,
		location: "Vertafore"
	},
	{
		_id: 7,
		location: "Cypher Learning"
	},
	{
		_id: 8,
		location: "USPS"
	},
	{
		_id: 9,
		location: "FPL"
	},
	{
		_id: 10,
		location: "Manit"
	},
]

const WhereGrammersWork = () => {
	return (
		<div className="bg-white pt-32">
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<h2 className='text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>Where Grammers work</h2>

				<Marquee
					className="mt-20"
				>
					{data.map((work) =>
						<p
							key={work?._id}
							className="text-pretty text-3xl tracking-tight text-gray-900 mr-20"
						>
							{work?.location}
						</p>
					)}
				</Marquee>
			</div>
		</div>
	)
}

export default WhereGrammersWork
