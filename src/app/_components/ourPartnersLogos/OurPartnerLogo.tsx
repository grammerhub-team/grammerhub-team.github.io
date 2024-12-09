import Image from "next/image"

const OurPartnerLogo = ({ alt, src, bgColor = "" }: { alt: string, src: string, bgColor?: string }) => {
	const color = bgColor !== "" ? `bg-[${bgColor}] p-4 rounded-md` : ""

	return (
		< div className={color}>
			<Image
				alt={alt}
				src={src}
				width={158}
				height={48}
			/>
		</div >
	)
}

export default OurPartnerLogo 
