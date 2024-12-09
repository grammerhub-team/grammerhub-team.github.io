import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline'
import EventCardTitle from "./EventCardTitle"
import EventCardImage from './EventCardImage'
import EventCardContent from './EventCardContent'
import EventCardContentDescription from './EventCardContentDescription'

type CProps = {
	event: {
		title: string,
		location: string,
		date: string,
		image: string,
		description: string,
	}
}

export default function EventCard({ event }: CProps) {
	return (
		<li className="relative">
			<EventCardImage image={event?.image} />

			<EventCardTitle title={event?.title} />

			<EventCardContent
				icon={<CalendarIcon className='h-6 w-6 text-gray-500' />}
				content={event?.date}
			/>

			<EventCardContent
				icon={<MapPinIcon className='h-6 w-6 text-gray-500' />}
				content={event?.location}
			/>

			<EventCardContentDescription description={event?.description} />
		</li>
	)
}
