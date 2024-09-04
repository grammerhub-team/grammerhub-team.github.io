import type { Block } from 'payload';

export const TalentCard: Block = {
	slug: 'talentCard',
	labels: {
		singular: 'Talent Card',
		plural: 'Talent Cards',
	},
	fields: [
		{
			name: 'talent',
			type: 'relationship',
			relationTo: 'talents',
			required: true,
		},
	],
};