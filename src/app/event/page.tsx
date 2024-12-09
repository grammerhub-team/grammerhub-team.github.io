import EventCardList from "../_components/event/EventCardList"
import { Hero } from "../_components/Hero"
import PageDetail from "../_components/PageDetail"

const events = [
	{
		title: "Grammerhub | In-Person Meetup",
		location: "Guild Hall, 1447 lyons rd, Coconut Creek, Florida 33063",
		date: "Sat Dec 21st • 12:30PM-02:30PM",
		image: "/images/event/Red_Black_Christmas_Party_Flyer.png",
		description: `Meet in person with us in Broward, Florida. GuildHall is an anime lounge with 
		food, drink, board games, international snacks, video games, tournaments and more.
		`,
	},
]

const pageDetail = {
	title: "Our upcoming events",
	text: `Refer to the list below to stay updated on our latest activities and upcoming events.`,
}

export default function Event() {
	return (
		<>
			<Hero
				heading="Events"
				subheading="We hold events throughout the year!"
				bkUrl="/images/grammerhub-hackathon-2022.jpg"
			/>

			<div className='container mx-auto max-w-7xl  px-4 py-12'>
				<PageDetail
					title={pageDetail.title}
					text={pageDetail.text}
				/>

				<EventCardList events={events} />
			</div>
		</>
	)
}
