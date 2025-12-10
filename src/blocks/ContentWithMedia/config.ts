import { Block } from 'payload'

export const ContentWithMedia: Block = {
  slug: 'ContentWithMedia',
  labels: {
    singular: 'contents',
    plural: 'content',
  },
  fields: [
    {
      type: 'richText',
      name: 'content',
    },
    {
      type: 'upload',
      name: 'image',
      relationTo: 'media',
    },
    {
      type: 'radio',
      name: 'textPosition',
      options: ['Left', 'Right'],
    },
  ],
}
