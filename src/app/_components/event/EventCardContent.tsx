import { ReactElement } from "react"

const EventCardContent = ({ icon, content }: { icon?: ReactElement | undefined, content: string }) => {
	return (
		<div className="flex gap-2 items-start mt-2">
			{icon && icon}
			<p className="pointer-events-none block font-medium text-gray-500">{content}</p>
		</div>
	)
}

export default EventCardContent 
