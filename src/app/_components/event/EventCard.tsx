import Image from "next/image"
import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline'

type CProps = {
	event: {
		_id: number
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
			<div className="group overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
				<Image
					alt="iamge of event"
					src={event?.image}
					width={600}
					height={400}
					className="pointer-events-none aspect-[10/7] object-cover group-hover:opacity-75"
				/>
			</div>

			<p className="pointer-events-none mt-2 block truncate text-xl font-medium text-gray-900">{event?.title}</p>

			<div className="flex gap-2 items-start mt-2">
				<CalendarIcon className='h-6 w-6 text-gray-500' />
				<p className="pointer-events-none block font-medium text-gray-500">{event?.date}</p>
			</div>

			<div className="flex gap-2 items-start mt-2">
				<MapPinIcon className='h-6 w-6 text-gray-500' />
				<p className="pointer-events-none block font-medium text-gray-500">{event?.location}</p>
			</div>

			<p className="pointer-events-none mt-2 block font-medium text-gray-500">{event?.description}</p>
		</li>
	)
}
