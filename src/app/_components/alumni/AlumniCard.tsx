import Image from "next/image"
import Link from "next/link"

type CProps = {
	_id: string,
	index: number,
	image: string,
	first: string,
	last: string,
	title: string,
	about: string,
	skills: string[],
	portfolioLink: string,
}

const AlumniCard = ({ index, image, first, last, title, about, skills, portfolioLink }: CProps) => {
	return (
		<div className={`mt-12 lg:flex lg:gap-10 lg:mt-20 ${index % 2 !== 0 && "lg:flex-row-reverse"} `}>
			<div className="group overflow-hidden rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
				<Image
					alt="iamge of event"
					src={image}
					width={600}
					height={400}
					className="pointer-events-none aspect-[10/7] object-cover"
				/>
			</div>

			<div className="flex-1">
				<p className="pointer-events-none block truncate text-4xl font-medium text-gray-900 mt-4 lg:mt-0">{`${first} ${last}`}</p>

				<p className="pointer-events-none mt-2 block truncate text-xl font-medium text-gray-900">{title}</p>

				<p className="pointer-events-none mt-4 block text-xl font-medium text-gray-900">{about}</p>

				<div className="mt-4">
					<p className="pointer-events-none mt-2 block truncate text-2xl font-medium text-gray-900">Skills</p>
					<p className="pointer-events-none mt-2 block text-xl font-medium text-gray-900">
						{skills.map((skill, index) => (
							<span
								key={index}
								className="mr-2"
							>
								{skill} |
							</span>
						))}
					</p>
				</div>

				<p className="pointer-events-none mt-4 block truncate text-2xl font-medium text-gray-900">Porfolio</p>
				<Link
					href={portfolioLink}
					target="_blank"
					className="hover:text-red-100"
				>
					<p className="hover:text-purple-800 mt-2 block truncate text-xl font-medium text-purple-900">{portfolioLink}</p>
				</Link>
			</div>
		</div>
	)
}

export default AlumniCard
