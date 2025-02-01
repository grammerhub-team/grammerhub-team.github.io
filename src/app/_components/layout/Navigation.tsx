import Image from 'next/image'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

// todo: add links to pages when ready
type NavigationItem = {
	name: string
	href: string
	current: boolean
	sub_links?: { name: string; href: string }[]
}

const navigation: NavigationItem[] = [
	{ name: 'About', href: '/about', current: false },
	{ name: 'Faqs', href: '/faqs', current: false },
	{ name: 'Talent', href: '/talent', current: false },
	{ name: 'Alumni', href: '/alumni', current: false },
	// {
	//   name: 'Speakers',
	//   href: '#',
	//   current: false,
	//   sub_links: [
	//     { name: 'Sign Up', href: '#' },
	//     { name: 'Get Ready', href: '#' },
	//   ],
	// },
	// { name: 'Partners', href: '#', current: false, sub_links: [{ name: 'Contact Us', href: '#' }] },
	// { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
	return (
		<Disclosure as='nav' className='sticky top-0 z-40 bg-white shadow-xl'>
			<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
				<div className='relative flex h-16 items-center'>
					<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
						{/* Mobile menu button*/}
						<DisclosureButton className='group relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
							<span className='absolute -inset-0.5' />
							<span className='sr-only'>Open main menu</span>
							<Bars3Icon aria-hidden='true' className='block h-6 w-6 group-data-[open]:hidden' />
							<XMarkIcon aria-hidden='true' className='hidden h-6 w-6 group-data-[open]:block' />
						</DisclosureButton>
					</div>
					<div className='flex flex-1 items-center sm:justify-between justify-center sm:items-stretch'>
						<Link href='/'>
							<Image src='/images/logos/grammerhub-logo.svg' alt='logo' width={150} height={100} />
						</Link>
						<div className='hidden sm:block'>
							<div className='flex'>
								{navigation.map(menuItem => {
									return (
										<Menu as='div' key={menuItem.name} className='relative'>
											<div>
												<MenuButton className='rounded-md px-3 py-2 text-sm font-medium hover:underline transition ease-in-out duration-150'>
													<Link href={menuItem.href} className='rounded-md px-3 py-2 text-sm font-medium text-gray-600'>
														{menuItem.name}
													</Link>
												</MenuButton>
											</div>
											{menuItem.sub_links && (
												<MenuItems
													transition
													className='right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'>
													{menuItem.sub_links.map(subLink => (
														<MenuItem key={subLink.href}>
															<Link
																href={subLink.href}
																target='_blank'
																className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100'>
																{subLink.name}
															</Link>
														</MenuItem>
													))}
												</MenuItems>
											)}
										</Menu>
									)
								})}
								<Link href='https://discord.com/channels/906246990457864273/906251227166306344' target='_blank'>
									<button
										type='button'
										className='rounded bg-indigo-50 ml-6 px-6 py-2 text-sm font-semibold text-indigo-500 shadow-sm hover:bg-indigo-100'>
										Join GrammerHub
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<DisclosurePanel className='sm:hidden'>
				<div className='space-y-1 px-2 pb-3 pt-2'>
					{navigation.map(item => {
						return (
							<div key={item.name}>
								<DisclosureButton
									as='a'
									href={item.href}
									aria-current={item.current ? 'page' : undefined}
									className={classNames(
										item.current ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-700 hover:text-white',
										'block rounded-md px-3 py-2 text-base font-medium'
									)}>
									{item.name}
								</DisclosureButton>
								{item.sub_links && (
									<DisclosurePanel className='pl-4'>
										{item.sub_links.map(subLink => (
											<Link
												key={subLink.href}
												href={subLink.href}
												className='block px-3 py-2 text-base text-gray-600 hover:bg-gray-700 hover:text-white'>
												{subLink.name}
											</Link>
										))}
									</DisclosurePanel>
								)}
							</div>
						)
					})}
				</div>
			</DisclosurePanel>
		</Disclosure>
	)
}
