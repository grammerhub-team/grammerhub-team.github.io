import EventCard from "./EventCard"

type CProps = {
	events: {
		title: string,
		location: string,
		date: string,
		image: string,
		description: string,
	}[]
}

export default function EventCardList({ events }: CProps) {
	return (
		<ul role="list" className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
			{events.map((event, index) => (
				<EventCard key={index} event={event} />
			))}
		</ul>
	)
}
