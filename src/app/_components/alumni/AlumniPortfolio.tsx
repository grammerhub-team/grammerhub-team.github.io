import Link from "next/link"

const AlumniPortfolio = ({ portfolioLink }: { portfolioLink: string }) => {
	return (
		<>
			<p className="pointer-events-none mt-4 block truncate text-2xl font-medium text-gray-900">Porfolio</p>
			<Link
				href={portfolioLink}
				target="_blank"
				className="hover:text-red-100"
			>
				<p className="hover:text-purple-800 mt-2 block truncate text-xl font-medium text-purple-900">{portfolioLink}</p>
			</Link>
		</>
	)
}

export default AlumniPortfolio 
