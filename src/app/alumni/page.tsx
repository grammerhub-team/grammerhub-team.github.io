import AlumniCard from '../_components/alumni/AlumniCard'
import data from '../../../data/alumni.json'
import { Hero } from '../_components/Hero'

const Alumni = () => {
	return (
		<>
			<Hero
				heading='Alumni'
				subheading='Grammerhub is commited to providing top-quality talent to help your business succeed. Browse out talent listings today and find the perfect tech professional for your company!'
				bkUrl='/images/faqs-bk.jpeg'
				position='40%'
			/>

			<div className='container mx-auto max-w-7xl  px-4 py-12'>
				{data.map((alumni, index) => (
					<AlumniCard
						key={alumni?._id}
						index={index}
						_id={alumni?._id}
						image={alumni?.image}
						name={alumni?.name}
						title={alumni?.title}
						about={alumni?.about ?? ''}
						skills={alumni?.skills}
						portfolioLink={alumni?.portfolioLink}
					/>
				))}
			</div>
		</>
	)
}

export default Alumni
