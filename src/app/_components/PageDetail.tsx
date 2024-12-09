type CProps = {
	title: string,
	text: string,
}

export default function PageDetail({ title, text }: CProps) {
	return (
		<div className='mt-12 mb-32'>
			<h1 className='mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
				{title}
			</h1>

			<p className='text-xl/8 mt-8'>
				{text}
			</p>

			<div className='relative mt-12'>
				<div aria-hidden='true' className='absolute inset-0 flex items-center'>
					<div className='w-full border-t border-gray-300' />
				</div>
			</div>
		</div>
	)
}
