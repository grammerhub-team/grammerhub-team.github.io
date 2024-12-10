import Image from "next/image"

const OurPartnerLogo = ({ alt, src }: { alt: string, src: string }) => {
	return (
		<Image
			alt={alt}
			src={src}
			width={158}
			height={48}
		/>
	)
}

export default OurPartnerLogo 
