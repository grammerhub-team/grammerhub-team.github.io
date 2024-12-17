import Image from 'next/image'
import { Team } from './_components/Team'
import OurPartnersLogos from './_components/OurPartnersLogos'
import WhereGrammersWork from './_components/whereGrammersWork/WhereGrammersWork'

export default function Home() {
	return (
		<main className='items-center w-full h-full'>
			<div className='w-full' style={{ height: '700px', position: 'relative', top: 0 }}>
				<Image src='/images/grammerhub-bk.jpg' alt='logo' fill />
			</div>
			<div className='bg-white w-full'>
				<div className='px-6 py-24 sm:px-6 sm:py-32 lg:px-8'>
					<div className='mx-auto max-w-2xl text-center'>
						<h2 className='text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
							Welcome to GrammerHub
						</h2>
						<p className='mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-600'>
							Grammerhub is a meetup for emerging tech talent: Junior and mid-level developers, designers, product and
							project managers, and those exploring new career opportunities.
						</p>
						<div className='mt-10 flex items-center justify-center gap-x-6'>
							<a
								href='#'
								className='rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
								Get started
							</a>
							<a href='#' className='text-sm/6 font-semibold text-gray-900'>
								Learn more <span aria-hidden='true'>→</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className='relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8'>
				<Image
					alt=''
					src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply'
					className='absolute inset-0 -z-10'
					fill
				/>
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
				<div className='mx-auto max-w-6xl '>
					<h2 className='text-6xl font-semibold tracking-tight text-white text-center mb-10'>
						How It Works
					</h2>
					<div className='flex gap-16'>
						<div className="relative w-full " style={{ paddingTop: '56.25%' }}>
							<Image
								src='/images/grammerhub-bk.jpg'
								alt='logo'
								fill
								style={{
									clipPath: 'inset(0 5% 0 5%)', objectFit: "cover", objectPosition: "center",
								}}
							/>
						</div>
						<div className='text-pretty font-geistvf text-lg font-medium text-gray-400 sm:text-xl/8'>
							<div className='mb-10'>
								<p className='text-6xl text-white mb-3 font-geist'>6:30 PM EST</p>
								<span className='text-2xl text-white'>We open our general video conference call (Intros, Q&A, Show-and-Tell, etc.)</span>
							</div>
							<div className='mb-10'>
								<p className='text-6xl text-white mb-3'>7:00 PM EST</p>
								<span className='text-2xl text-white'>Work on Projects, Hackathons, Career Prep, Job Search, and much more</span>
							</div>
							<p className='text-6xl text-white mb-3'>8:15 PM EST</p>
							<span className='text-2xl text-white'>Wrap-up, Announcements</span>
						</div>
					</div>
				</div>
			</div>
			<WhereGrammersWork />
			<Team />

			<OurPartnersLogos />
		</main>
	)
}
