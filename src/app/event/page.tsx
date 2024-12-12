import EventCard from "../_components/event/EventCard"
import { Hero } from "../_components/Hero"
import PageDetail from "../_components/PageDetail"

const events = [
	{
		_id: 1,
		title: "Grammerhub | In-Person Meetup",
		location: "Guild Hall, 1447 lyons rd, Coconut Creek, Florida 33063",
		date: "Sat Dec 21st, 2024 • 12:30PM-02:30PM",
		image: "/images/event/Red_Black_Christmas_Party_Flyer.png",
		description: `Meet in person with us in Broward, Florida. GuildHall is an anime lounge with 
		food, drink, board games, international snacks, video games, tournaments and more.
		`,
	},
	{
		_id: 2,
		title: "Grammerhub | Week 3 - Mockup Interviews",
		location: "Online - Grammerhub Discord Channel",
		date: "Mon Jan 20th, 2025 • 06:30PM",
		image: "/images/event/grammerhub_w3_mon_meet.png",
		description: `By the Third Monday of the Month, you've placed great emphasis on your educational gaps, 
			making improvements to your digital assets, and now you feel ready to sit with Senior-level Grammers who are
			going to work with you on your interviewing skills.
			Leetcode, white-boarding, and interview camera-facing will be your moments to shine - You got this!
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

				<ul role="list" className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
					{events.map((event, index) => (
						<EventCard
							key={index}
							event={event}
						/>
					))}
				</ul>

			</div>
		</>
	)
}
