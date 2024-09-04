import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'

export const Talents: CollectionConfig = {
	slug: 'talents',
	access: {
		create: authenticated,
		read: () => true,
		update: authenticated,
		delete: authenticated,
	},
	admin: {
		useAsTitle: 'name',
	},
	fields: [
		{
			name: 'name',
			type: 'text',
			required: true,
		},
		{
			name: 'image',
			type: 'upload',
			relationTo: 'media',
			required: true,
		},
		{
			name: 'socialLinks',
			type: 'array',
			fields: [
				{
					name: 'platform',
					type: 'select',
					options: ['LinkedIn', 'Twitter', 'Facebook', 'Instagram'],
					required: true,
				},
				{
					name: 'url',
					type: 'text',
					required: true,
				},
			],
		},
		{
			name: 'github',
			type: 'text',
		},
		{
			name: 'technologyStack',
			type: 'array',
			fields: [
				{
					name: 'technology',
					type: 'text',
					required: true,
				},
				{
					name: 'icon',
					type: 'upload',
					relationTo: 'media',
					required: true,
				},
			],
		},
	],
}
