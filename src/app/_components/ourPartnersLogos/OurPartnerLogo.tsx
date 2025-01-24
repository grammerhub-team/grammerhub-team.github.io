import Image from 'next/image'

const OurPartnerLogo = ({ alt, src }: { alt: string; src: string }) => {
	return <Image alt={alt} src={src} width={300} height={100} className='mx-4 my-4 min-w-[200px] object-contain' />
}

export default OurPartnerLogo
