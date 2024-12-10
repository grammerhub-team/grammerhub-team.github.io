import OurPartnerLogo from "./ourPartnersLogos/OurPartnerLogo"

const data = [
	{
		_id: 1,
		alt: "Tech Alliance Of SWFL",
		src: "/images/our_partners_logos/tech_alliance_swfl.png",
	},
	{
		_id: 2,
		alt: "South Florida Tech Hub",
		src: "/images/our_partners_logos/south_florida_tech_hub1.png",
	},
	{
		_id: 3,
		alt: "Radical Partners",
		src: "/images/our_partners_logos/radical_partners.png",
	},
	{
		_id: 4,
		alt: "4Geeks",
		src: "/images/our_partners_logos/4geeks.svg",
	},
	{
		_id: 5,
		alt: "Code Kentucky",
		src: "/images/our_partners_logos/code_kentucky1.png",
	},
	{
		_id: 6,
		alt: "Miami Tech Works",
		src: "/images/our_partners_logos/miami_tech_works.svg",
	},
]

const OurPartnersLogos = () => {
	return (
		<div className="bg-white border-t border-t-gray-50 pt-12">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">

				<h2 className="text-center text-lg/8 font-semibold text-gray-900">
					Trusted by the world’s most innovative teams
				</h2>

				<div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					{data.map((logo) => (
						<OurPartnerLogo
							key={logo?._id}
							alt={logo?.alt}
							src={logo?.src}
						/>)
					)}
				</div>
			</div>
		</div>
	)
}

export default OurPartnersLogos
