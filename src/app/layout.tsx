import type { Metadata } from 'next'
import './globals.css'
import Navigation from './_components/layout/Navigation'
import Footer from './_components/layout/Footer'

export const metadata: Metadata = {
	title: 'GRAMMERHUB | CODE - LEARN - TECH',
	description: 'A community where we meet to learn about code and the tech industry.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`antialiased`}>
				<Navigation />
				{children}
				<Footer /> 
			</body>
		</html>
	)
}
