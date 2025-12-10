'use client'

import React, { useState } from 'react'
import type { ContentWithMediaBlock as ContentWithMediaProps } from '../../app/types/ContentWithMedia'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'

export const ContentWithMediaBlock: React.FC<ContentWithMediaProps & { id?: string }> = ({
  id,
  content,
  images = [],
  button,
}) => {
  const [current, setCurrent] = useState(0)

  const itemsPerPage = 3
  const total = images.length
  const maxPage = Math.ceil(total / itemsPerPage) - 1

  const next = () => setCurrent((c) => (c < maxPage ? c + 1 : 0))
  const prev = () => setCurrent((c) => (c > 0 ? c - 1 : maxPage))

  return (
    <section id={`block-${id}`} className="my-20 container mx-auto px-4 flex flex-col gap-8">
      {/* Naslov */}
      <div className="text-center max-w-3xl mx-auto">
        <RichText
          data={content}
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white"
        />
      </div>

      <div className="relative my-8">
        {/* Left arrow */}
        <button
          onClick={prev}
          className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 p-3 bg-transparent rounded-full shadow text-gray-500 text-4xl mr-8"
        >
          ❮
        </button>

        <div className="relative overflow-hidden">
          {/* Slider wrapper */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((item, index) => (
              <div key={index} className="flex-none w-1/3 p-3">
                <div className="rounded-xl overflow-hidden shadow">
                  <Media resource={item.image} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 p-3 bg-transparent rounded-full shadow text-gray-500 text-4xl ml-8"
        >
          ❯
        </button>
      </div>

      {button?.link && (
        <a
          href={`/${button.link.slug}`}
          className="inline-block self-end mt-6 px-8 py-1 bg-[#ee5b31] text-white rounded-full text-lg font-semibold hover:bg-[#d84e28] transition"
        >
          {button.label ?? 'Learn more'}
        </a>
      )}
    </section>
  )
}
