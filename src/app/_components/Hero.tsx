export const Hero = ({ heading, subheading, bkUrl, position }: { heading: string; subheading: string; bkUrl: string, position?:string }) => {
	return (
		<div className='relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32'>
			<img alt='' src={bkUrl} className={`absolute inset-0 -z-10 h-full w-full object-cover object-${position}`} />
			<div className='absolute inset-0 -z-10 bg-black opacity-70'></div>
			<div
				aria-hidden='true'
				className='hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl'>
				<div
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
					className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20'
				/>
			</div>
			<div
				aria-hidden='true'
				className='absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu'>
				<div
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
					className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20'
				/>
			</div>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl lg:mx-0'>
					<h2 className='text-5xl font-semibold tracking-tight text-white sm:text-7xl'>{heading}</h2>
					<p className='mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8'>{subheading}</p>
				</div>
			</div>
		</div>
	)
}
