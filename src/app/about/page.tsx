import { InboxIcon, SparklesIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

import { Hero } from '../_components/Hero'

export default function About() {
	return (
		<>
			<Hero
				heading='About Us'
				subheading='We are a community of learners and tech enthusiasts.'
				bkUrl='/images/about-bk.jpeg'
			/>

			<div className='container mx-auto px-4 py-12'>
				<div className='mt-12 mb-32'>
					<h1 className='mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
						It all began with
					</h1>
					<p className='text-xl/8 mt-8'>
						The idea to provide support to others just starting in tech as a Developer - and then, the world turned to
						remote-only. As a community, we’ve met folks from every continent in our online meetups. And one thing is
						for sure: anyone starting in Tech needs mentoring and support to navigate the learning curves. At
						Grammerhub, we strive to provide the necessary tools to make a difference in a person’s career. And we’re
						just getting started.
					</p>
					<div className='relative mt-12'>
						<div aria-hidden='true' className='absolute inset-0 flex items-center'>
							<div className='w-full border-t border-gray-300' />
						</div>
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center my-24'>
					<div>
						<div>
							<span className='flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600'>
								<InboxIcon aria-hidden='true' className='h-8 w-8 text-white' />
							</span>
						</div>
						<div className='mt-6'>
							<h2 className='text-3xl font-bold tracking-tight text-gray-900'>The first Meetup! March 9th, 2020</h2>
							<p className='mt-4 text-lg text-gray-500'>Location provided by The SilverLogic in Boca Raton, Florida.</p>
						</div>
					</div>
					<div className='md:col-span-2'>
						<Image
							src='/images/grammerhub_09MAR2020.jpg'
							alt='A steaming cup of coffee next to a laptop'
							className='rounded-lg object-cover w-full h-72 md:h-[500px]'
							width={800}
							height={600}
						/>
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center'>
					<div className='md:col-span-2 order-last md:order-first'>
						<Image
							src='/images/grammerhub-hackathon-2022.jpg'
							alt='A lush green tea plantation'
							className='rounded-lg object-cover w-full h-72 md:h-[500px]'
							width={800}
							height={600}
						/>
					</div>
					<div>
						<div>
							<span className='flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600'>
								<SparklesIcon aria-hidden='true' className='h-8 w-8 text-white' />
							</span>
						</div>
						<div className='mt-6'>
							<h2 className='text-3xl font-bold tracking-tight text-gray-900'>
								Grammerhub’s Teams at FAU 2022 Hackathon!
							</h2>
							<p className='mt-4 text-lg text-gray-500'>Florida Atlantic University. Boca Raton, Florida.</p>
						</div>
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center my-24'>
					<div>
						<div>
							<span className='flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600'>
								<InboxIcon aria-hidden='true' className='h-8 w-8 text-white' />
							</span>
						</div>
						<div className='mt-6'>
							<h2 className='text-3xl font-bold tracking-tight text-gray-900'>
								Grammerhub Team scores prize at the FAU 2022 Hackathon!
							</h2>
							<p className='mt-4 text-lg text-gray-500'>Florida Atlantic University. Boca Raton, Florida.</p>
						</div>
					</div>
					<div className='md:col-span-2'>
						<Image
							src='/images/grammerhub-hackathon-prize.jpg'
							alt='A steaming cup of coffee next to a laptop'
							className='rounded-lg object-cover w-full h-72 md:h-[500px]'
							width={800}
							height={600}
						/>
					</div>
				</div>
			</div>
		</>
	)
}
