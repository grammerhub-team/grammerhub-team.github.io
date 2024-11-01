'use client';
import Link from 'next/link';
import { useState } from 'react';

type GrammerCardProps = {
  title: string;
  author: string;
  bio: string;
  authorImage: string;
  portfolioSite?: string;
}

export function GrammerCard(props: GrammerCardProps) {
  const [showBio, setShowBio] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowBio(true)}
      onMouseLeave={() => setShowBio(false)}
      style={{ backgroundImage: `url(${props.authorImage})` }}
      className={`
        flex justify-center items-end border
        border-white rounded w-[256px] h-[256px] sm:w-[512px]
        sm:h-[512px] bg-cover bg-no-repeat bg-center
      `}
    >
      <div
        className="bg-white text-center text-black max-h-[100%] w-[80%] rounded mb-[0.5rem] py-[0.5rem]"
      >
        <h3 className="font-semibold">{props.author}</h3>
        <h4>{props.title}</h4>
        {!!props.portfolioSite && (
          <Link target="_blank" className="text-sm text-blue-500" href={props.portfolioSite}>View Portfolio</Link>
        )}
        <div
          style={{
            maxHeight: showBio ? '128px' : '0',
            overflowY: 'auto',
            transition: 'max-height 0.3s linear',
          }}
        >
          <p>{props.bio}</p>
        </div>
      </div>
    </div>
  )
}
