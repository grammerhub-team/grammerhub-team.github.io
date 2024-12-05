import Image from "next/image"

type CProps = {
	event: {
		title: string,
		date: Date,
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
			<p className="pointer-events-none block font-medium text-gray-500">{event?.date?.toLocaleString()}</p>
			<p className="pointer-events-none mt-2 block font-medium text-gray-500">{event?.description}</p>
		</li>
	)
}
