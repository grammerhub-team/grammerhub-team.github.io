import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'

const Grammers: CollectionConfig = {
  slug: 'grammers',
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'title', 'created_at'],
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'bio',
      type: 'textarea',
      required: true,
      minLength: 100,
      maxLength: 600,
    },
    {
      name: 'portfolio_site',
      type: 'text',
      required: false,
    },
    {
      name: 'author_image',
      type: 'upload',
      required: true,
      relationTo: 'media',
    },
    // This type is for deciding the order in which to place Grammers on the talent page
    {
      name: 'relative_ordering',
      type: 'number',
      required: true,
    },
  ],
  timestamps: true,
}

export default Grammers
