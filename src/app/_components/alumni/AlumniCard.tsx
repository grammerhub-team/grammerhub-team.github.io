import AlumniCardImage from "./AlumniCardImage"
import AlumniSkills from "./AlumniSkills"
import AlumniPortfolio from "./AlumniPortfolio"

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

const AlumniCard = ({ _id, index, image, first, last, title, about, skills, portfolioLink }: CProps) => {
	return (
		<div className={`mt-12 lg:flex lg:gap-10 lg:mt-20 ${index % 2 !== 0 && "lg:flex-row-reverse"} `}>
			<AlumniCardImage image={image} />

			<div className="flex-1">
				<p className="pointer-events-none block truncate text-4xl font-medium text-gray-900 mt-4 lg:mt-0">{`${first} ${last}`}</p>

				<p className="pointer-events-none mt-2 block truncate text-xl font-medium text-gray-900">{title}</p>

				<p className="pointer-events-none mt-4 block text-xl font-medium text-gray-900">{about}</p>

				<AlumniSkills skills={skills} />

				<AlumniPortfolio portfolioLink={portfolioLink} />
			</div>
		</div>
	)
}

export default AlumniCard
