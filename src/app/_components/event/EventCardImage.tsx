import Image from "next/image"

const EventCardImage = ({ image }: { image: string }) => {
	return (
		<div className="group overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
			<Image
				alt="iamge of event"
				src={image}
				width={600}
				height={400}
				className="pointer-events-none aspect-[10/7] object-cover group-hover:opacity-75"
			/>
		</div>
	)
}

export default EventCardImage 
