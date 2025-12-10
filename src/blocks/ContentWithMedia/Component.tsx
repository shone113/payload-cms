import React from 'react'
import type { ContentWithMediaBlock as ContentWithMediaProps } from '../../app/types/ContentWithMedia'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'

export const ContentWithMediaBlock: React.FC<ContentWithMediaProps & { id?: string }> = ({
  id,
  content,
  image,
  textPosition,
}) => {
  const isLeft = textPosition === 'Left'

  return (
    <div
      id={`block-${id}`}
      className="my-16 container grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
    >
      {isLeft ? (
        <>
          <RichText data={content} />
          {image && <Media resource={image} />}
        </>
      ) : (
        <>
          {image && <Media resource={image} />}
          <RichText data={content} />
        </>
      )}
    </div>
  )
}
