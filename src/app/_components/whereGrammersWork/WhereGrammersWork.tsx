import Marquee from "react-fast-marquee"

const data = [
	{
		_id: 1,
		name: "Amex"
	},
	{
		_id: 2,
		name: "Nvidia"
	},
	{
		_id: 3,
		name: "City of Atlanta"
	},
	{
		_id: 4,
		name: "City Furniture"
	},
	{
		_id: 5,
		name: "Amazon"
	},
	{
		_id: 6,
		name: "Vertafore"
	},
	{
		_id: 7,
		name: "Cypher Learning"
	},
	{
		_id: 8,
		name: "USPS"
	},
	{
		_id: 9,
		name: "FPL"
	},
	{
		_id: 10,
		name: "Manit"
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
							{work?.name}
						</p>
					)}
				</Marquee>
			</div>
		</div>
	)
}

export default WhereGrammersWork
