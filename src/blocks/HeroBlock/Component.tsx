'use client'

import React, { useState } from 'react'
import type { HeroBlock as HeroProps } from '@/app/types/HeroBlock'
import RichText from '@/components/RichText'
import { MapPin, AlarmClock } from 'lucide-react'

export const HeroBlock: React.FC<HeroProps & { id?: string }> = ({
  id,
  location,
  date,
  headingLine1,
  headingLine2,
  content,
  button,
  stats,
  backgroundImage,
}) => {
  return (
    <section
      id={`block-${id}`}
      className="relative w-full h-[600px] sm:h-[700px] md:h-[800px] flex flex-col justify-center items-center"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage.url})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex items-center justify-center gap-10 mt-50">
        {/* LOCATION */}
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-primary" />
          <p className="text-base leading-relaxed text-white">{location}</p>
        </div>

        {/* DATE */}
        <div className="flex items-center gap-3">
          <AlarmClock className="w-5 h-5 text-primary" />
          <p className="text-base leading-relaxed text-white">{date}</p>
        </div>
      </div>

      <div className="text-center max-w-6xl mx-auto mt-14">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-[0.7]">
          {headingLine1 && <span className="text-white">{headingLine1}</span>}
          <br />
          {headingLine2 && <span className="text-[#ee5b31]">{headingLine2}</span>}
        </h1>
      </div>

      <div className="relative mt-20 w-full overflow-hidden flex justify-center">
        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white text-center whitespace-pre-line">
          {content}
        </p>
      </div>

      {button?.link && (
        <div className="flex justify-center mt-16">
          <a
            href={`/${button.link.slug}`}
            className="inline-block self-end px-6 py-1.5 bg-[#ee5b31] text-white rounded-full text-base font-semibold hover:bg-[#d84e28] transition"
          >
            {button.label ?? 'Learn more'}
          </a>
        </div>
      )}

      <div className="flex justify-center gap-12 mt-40">
        {stats?.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#ee5b31]">
              {stat.number}
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-center text-white whitespace-pre-line">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
