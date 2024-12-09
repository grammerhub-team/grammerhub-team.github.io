const EventCardTitle = ({ title }: { title: string }) => {
	return (
		<p className="pointer-events-none mt-2 block truncate text-xl font-medium text-gray-900">{title}</p>
	)
}

export default EventCardTitle 
