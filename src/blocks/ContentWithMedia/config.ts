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
      name: 'heading',
    },
    {
      type: 'textarea',
      name: 'content',
    },
    {
      type: 'group',
      name: 'button',
      label: 'Button',
      fields: [
        {
          type: 'text',
          name: 'label',
          label: 'Button Label',
          required: false,
        },
        {
          type: 'relationship',
          name: 'link',
          label: 'Link to Page',
          relationTo: 'pages',
          required: false,
        },
      ],
    },
    {
      type: 'richText',
      name: 'secondaryHeading',
    },
    {
      type: 'array',
      name: 'images',
      fields: [
        {
          type: 'upload',
          name: 'image',
          relationTo: 'media',
        },
      ],
    },
    {
      type: 'group',
      name: 'secondaryButton',
      label: 'Button',
      fields: [
        {
          type: 'text',
          name: 'label',
          label: 'Button Label',
          required: false,
        },
        {
          type: 'relationship',
          name: 'link',
          label: 'Link to Page',
          relationTo: 'pages',
          required: false,
        },
      ],
    },
  ],
}
