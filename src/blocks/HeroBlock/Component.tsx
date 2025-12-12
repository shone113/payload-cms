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
}) => {
  return (
    <section id={`block-${id}`} className="my-20 container mx-auto px-4 flex flex-col gap-8">
      <div className="flex items-center justify-center gap-10">
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

      <div className="text-center max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          {headingLine1 && <span className="text-white">{headingLine1}</span>}
          <br />
          {headingLine2 && <span className="text-[#ee5b31]">{headingLine2}</span>}
        </h1>
      </div>

      <div className="relative w-full overflow-hidden flex justify-center">
        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white text-center whitespace-pre-line">
          {content}
        </p>
      </div>

      {button?.link && (
        <div className="flex justify-center mt-6">
          <a
            href={`/${button.link.slug}`}
            className="inline-block self-end mt-6 px-8 py-1 bg-[#ee5b31] text-white rounded-full text-lg font-semibold hover:bg-[#d84e28] transition"
          >
            {button.label ?? 'Learn more'}
          </a>
        </div>
      )}
    </section>
  )
}
