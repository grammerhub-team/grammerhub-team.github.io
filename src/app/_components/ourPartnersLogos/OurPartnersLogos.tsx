import Image from "next/image"

const data = [
	{
		alt: "Tech Alliance Of SWFL",
		src: "/images/our_partners_logos/tech_alliance_swfl.png",
		bgColor: "",
	},
	{
		alt: "South Florida Tech Hub",
		src: "/images/our_partners_logos/south_florida_tech_hub.png",
		bgColor: "#000000",
	},
	{
		alt: "Radical Partners",
		src: "/images/our_partners_logos/radical_partners.png",
		bgColor: "",
	},
	{
		alt: "4Geeks",
		src: "/images/our_partners_logos/4geeks.svg",
		bgColor: "",
	},
	{
		alt: "Code Kentucky",
		src: "/images/our_partners_logos/code_kentucky.png",
		bgColor: "#000000",
	},
	{
		alt: "Miami Tech Works",
		src: "/images/our_partners_logos/miami_tech_works.svg",
		bgColor: "",
	},
]

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

const OurPartnersLogos = () => {
	return (
		// <div className="bg-white py-10 sm:py-32">
		<div className="bg-white border-t border-t-gray-50 pt-12">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 className="text-center text-lg/8 font-semibold text-gray-900">
					Trusted by the world’s most innovative teams
				</h2>
				<div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					{data.map((logo, index) => (
						<OurPartnerLogo
							key={index}
							alt={logo?.alt}
							src={logo?.src}
							bgColor={logo?.bgColor}
						/>)
					)}
				</div>
			</div>
		</div>
	)
}

export default OurPartnersLogos
