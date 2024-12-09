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
	title: "Lorem ipsum dolor sit",
	text: `
		Lorem ipsum dolor sit amet, consectetur adipiscing elit,
		sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
		Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
		Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	`,
}

export default function Event() {
	return (
		<>
			<Hero
				heading="Events"
				subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
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
