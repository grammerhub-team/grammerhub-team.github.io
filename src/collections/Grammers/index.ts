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
    },
    {
      name: 'title',
      type: 'text',
    },
  ],
  timestamps: true,
}

export default Grammers
