import { JSX, SVGProps } from 'react'
import Image from 'next/image'

const navigation = {
	company: [
		{ name: 'About', href: '#' },
		{ name: 'Events', href: '#' },
		{ name: 'FAQ', href: '#' },
		// { name: 'Press', href: '#' },
	],
	legal: [{ name: 'Terms of service', href: '#' }],
	social: [
		{
			name: 'Linkedin',
			href: 'https://www.linkedin.com/company/grammerhub/posts/?feedView=all',
			icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
				<svg fill='currentColor' viewBox='0 0 24 24' {...props}>
					<path
						fillRule='evenodd'
						d='M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.58c-1.14 0-2.06-.93-2.06-2.08 0-1.15.92-2.08 2.06-2.08 1.14 0 2.06.93 2.06 2.08 0 1.15-.92 2.08-2.06 2.08zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.14 1.45-2.14 2.95v5.71h-3.56V9h3.42v1.56h.05c.48-.91 1.66-1.86 3.42-1.86 3.66 0 4.34 2.41 4.34 5.54v6.21z'
						clipRule='evenodd'
					/>
				</svg>
			),
		},
		{
			name: 'Instagram',
			href: 'https://www.instagram.com/grammerhub/',
			icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
				<svg fill='currentColor' viewBox='0 0 24 24' {...props}>
					<path
						fillRule='evenodd'
						d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
						clipRule='evenodd'
					/>
				</svg>
			),
		},
		{
			name: 'X',
			href: 'http://twitter.com/grammerhub',
			icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
				<svg fill='currentColor' viewBox='0 0 24 24' {...props}>
					<path d='M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z' />
				</svg>
			),
		},
		{
			name: 'GitHub',
			href: 'https://github.com/grammerhub',
			icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
				<svg fill='currentColor' viewBox='0 0 24 24' {...props}>
					<path
						fillRule='evenodd'
						d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
						clipRule='evenodd'
					/>
				</svg>
			),
		},
		{
			name: 'Email',
			href: 'mailto:info@grammerhub.com',
			icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
				<svg fill='currentColor' viewBox='0 0 24 24' {...props}>
					<path d='M20.5 4h-17A2.5 2.5 0 001 6.5v11A2.5 2.5 0 003.5 20h17a2.5 2.5 0 002.5-2.5v-11A2.5 2.5 0 0020.5 4zm0 2l-8.5 5.5L3.5 6h17zM3.5 18v-9.5l8.5 5.5 8.5-5.5V18h-17z' />
				</svg>
			),
		},
	],
}

export default function Footer() {
	return (
		<footer className='bg-white'>
			<div className='mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32'>
				<div className='w-full flex justify-between xl:gap-14'>
					<div className='space-y-8'>
						<Image src='/images/logos/grammerhub-logo.svg' alt='logo' width={150} height={100} />
						<p className='text-balance text-sm/6 text-gray-600'>
							Grammerhub is a meetup for emerging tech talent: Junior and mid-level developers, designers, product and
							project managers, and those exploring new career opportunities.
						</p>
						<div className='flex gap-x-6'>
							{navigation.social.map(item => (
								<a key={item.name} href={item.href} target='_blank' className='text-gray-600 hover:text-gray-800'>
									<span className='sr-only'>{item.name}</span>
									<item.icon aria-hidden='true' className='h-6 w-6' />
								</a>
							))}
						</div>
					</div>
					<div className='mt-16 grid grid-cols-2 gap-16 xl:col-span-2 xl:mt-0'>
						<div className='md:grid md:grid-cols-2 md:gap-8'>
							<div>
								<h3 className='text-sm/6 font-semibold text-gray-900'>Links</h3>
								<ul role='list' className='mt-6 space-y-4'>
									{navigation.company.map(item => (
										<li key={item.name}>
											<a
												href={item.href}
												target='_blank'
												rel='noopener noreferrer'
												className='text-sm/6 text-gray-600 hover:text-gray-900'>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className='mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24'>
					<p className='text-sm/6 text-gray-600'>&copy; Grammerhub. All Rights Reserved. 2020 - 2024</p>
				</div>
			</div>
		</footer>
	)
}
