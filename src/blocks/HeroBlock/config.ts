import { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'heroBlock',
  labels: {
    singular: 'hero',
    plural: 'heroes',
  },
  fields: [
    {
      type: 'textarea',
      name: 'location',
    },
    {
      type: 'textarea',
      name: 'date',
    },
    {
      name: 'headingLine1',
      type: 'text',
      defaultValue: '',
    },
    {
      name: 'headingLine2',
      type: 'text',
      defaultValue: '',
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
  ],
}
