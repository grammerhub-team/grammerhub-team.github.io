import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { GrammerCard } from './Card'
import { Media } from '@/payload-types'

export default async function TalentPage() {
  const payload = await getPayloadHMR({ config: configPromise })

  const grammers = await payload.find({
    collection: 'grammers',
    sort: 'relative_ordering',
  })

  return (
    <div className="p-8 mx-auto">
      <h1 className="font-semibold text-4xl text-center">Talent</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-[2rem] mt-[4rem]">
        {grammers.docs.map((grammer, index) => (
          <div className={`flex w-full justify-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
            <GrammerCard
              key={grammer.id}
              title={grammer.title}
              author={grammer.name}
              bio={grammer.bio}
              authorImage={(grammer.author_image as Media)?.url || ""}
              portfolioSite={grammer.portfolio_site || ""}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

