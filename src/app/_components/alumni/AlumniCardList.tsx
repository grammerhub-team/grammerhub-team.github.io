import AlumniCard from "./AlumniCard"

type CProps = {
	data: {
		_id: string,
		image: string,
		first: string,
		last: string,
		title: string,
		about: string,
		skills: string[],
		portfolioLink: string,
	}[],
}

const AlumniCardList = ({ data }: CProps) => {
	return (
		<>
			{data.map((alumni, index) => (
				<AlumniCard
					key={alumni?._id}
					index={index}
					_id={alumni?._id}
					image={alumni?.image}
					first={alumni?.first}
					last={alumni?.last}
					title={alumni?.title}
					about={alumni?.about}
					skills={alumni?.skills}
					portfolioLink={alumni?.portfolioLink}
				/>
			))}
		</>
	)
}

export default AlumniCardList
