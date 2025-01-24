import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { Hero } from '../_components/Hero'

const faqs = [
	{
		question: 'When do you meet?',
		answer:
			"Every Monday at 6:30 PM EST. If you'd like to be updated when we are closed for holidays or events, sign up at http://meetup.com/grammerhub for notifications.",
	},
	{
		question: 'Where do you meet?',
		answer:
			'We currently meet online but we are active in multiple cities. Stay tuned for an in-person event near you. Join us at http://discord.grammerhub.org/ to be notified.',
	},
	{
		question: 'Is there a cost to participate?',
		answer:
			'No. Grammerhub is a nonprofit organization based in the United States and we provide programs and services at no cost to you.',
	},
	{
		question: 'How do I get a free Grammerhub T-shirt?',
		answer: 'Join us on Mondays for details!',
	},
]

export default function FAQs() {
	return (
		<>
			<Hero
				heading='Faqs'
				subheading='Get answers to common questions about Grammerhub.'
				bkUrl='/images/faqs-bk.jpeg'
				position='34%'
			/>
			<div className='bg-white'>
				<div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40'>
					<div className='mx-auto max-w-4xl divide-y divide-gray-900/10'>
						<h2 className='text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
							Frequently asked questions
						</h2>
						<dl className='mt-10 space-y-6 divide-y divide-gray-900/10'>
							{faqs.map(faq => (
								<Disclosure key={faq.question} as='div' className='pt-6'>
									<dt>
										<DisclosureButton className='group flex w-full items-start justify-between text-left text-gray-900'>
											<span className='text-base/7 font-semibold'>{faq.question}</span>
											<span className='ml-6 flex h-7 items-center'>
												<PlusSmallIcon aria-hidden='true' className='h-6 w-6 group-data-[open]:hidden' />
												<MinusSmallIcon aria-hidden='true' className='h-6 w-6 [.group:not([data-open])_&]:hidden' />
											</span>
										</DisclosureButton>
									</dt>
									<DisclosurePanel as='dd' className='mt-2 pr-12'>
										<p className='text-base/7 text-gray-600'>{faq.answer}</p>
									</DisclosurePanel>
								</Disclosure>
							))}
						</dl>
					</div>
				</div>
			</div>
		</>
	)
}
