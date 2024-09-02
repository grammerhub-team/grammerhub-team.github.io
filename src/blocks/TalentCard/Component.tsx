import React from 'react'
import { Media } from '@/components/Media'
import { Talent } from '@/payload-types'
import { cn } from '@/utilities/cn'
import { Github, Linkedin, X, Facebook, Instagram } from 'lucide-react'

type TalentCardProps = {
  talent: Talent
}

const SocialIcon = ({ platform, url }) => {
  const icons = {
    LinkedIn: Linkedin,
    Twitter: X,
    Facebook: Facebook,
    Instagram: Instagram,
  }
  const Icon = icons[platform]
  return Icon ? (
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
      <Icon size={20} />
    </a>
  ) : null
}

export const TalentCardComponent: React.FC<TalentCardProps> = ({ talent }) => {
  return (
    <div className="w-full md:w-1/2 p-4">
      <div className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/5">
            <Media 
              resource={talent.image} 
              alt={talent.name} 
              className="w-full h-full object-cover"
              imgClassName="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-3/5 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">{talent.name}</h3>
              {talent.github && (
                <a href={talent.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors mb-2 flex items-center">
                  <Github size={20} className="mr-2" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
            <div className="flex space-x-4 mb-4">
              {talent.socialLinks?.map((link, index) => (
                <SocialIcon key={index} platform={link.platform} url={link.url} />
              ))}
            </div>
            <div className="flex flex-wrap -mx-2">
              {talent.technologyStack?.map((tech, index) => (
                <div key={index} className="px-2 mb-2 text-center w-1/4">
                  <Media 
                    resource={tech.icon} 
                    alt={tech.technology} 
                    className="w-8 h-8 mx-auto mb-1"
                    imgClassName="w-8 h-8 object-contain"
                  />
                  <span className="text-xs">{tech.technology}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}