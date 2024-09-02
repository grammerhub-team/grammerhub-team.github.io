# Adding New Features to the Project (WIP)

This guide outlines the process of adding new features to our project, using the recent addition of the Talent feature as an example. By following these steps, you can integrate new functionality seamlessly into our existing architecture.

## Table of Contents

- [Adding New Features to the Project (WIP)](#adding-new-features-to-the-project-wip)
  - [Table of Contents](#table-of-contents)
  - [1. Planning the Feature](#1-planning-the-feature)
  - [2. Creating the Data Model](#2-creating-the-data-model)
  - [3. Implementing the Payload CMS Collection](#3-implementing-the-payload-cms-collection)
  - [4. Developing the Block Component](#4-developing-the-block-component)
    - [4.1. Block Configuration](#41-block-configuration)
    - [4.2. React Component](#42-react-component)
  - [5. Integrating with Existing Systems](#5-integrating-with-existing-systems)
    - [5.1. Update Page Types using the generated types from Payload](#51-update-page-types-using-the-generated-types-from-payload)
    - [5.2. Update RenderBlocks Component](#52-update-renderblocks-component)
  - [6. Styling and Responsiveness](#6-styling-and-responsiveness)
  - [7. Testing](#7-testing)
  - [8. Documentation](#8-documentation)

## 1. Planning the Feature

Before diving into implementation, clearly define the feature's requirements and how it fits into the existing system.

For the Talent feature:
- Display name, image, social links, GitHub, and technology stack
- Create a reusable component for use in various parts of the site
- Ensure responsiveness and compatibility with light/dark modes
- Restrict creation and editing to admin users only

## 2. Creating the Data Model

Define the data structure for your new feature.

Example for Talent:

```typescript
interface Talent {
  id: string;
  name: string;
  image: Media;
  socialLinks?: {
    platform: 'LinkedIn' | 'Twitter' | 'Facebook' | 'Instagram';
    url: string;
  }[];
  github?: string;
  technologyStack?: {
    technology: string;
    icon: Media;
  }[];
}
```

## 3. Implementing the Payload CMS Collection
Create a new collection in Payload CMS to manage the data for your feature.

File: src/collections/Talents.ts

```typescript
import type { CollectionConfig } from 'payload';
import { authenticated } from '../access/authenticated';

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
    // ... other fields as per your data model
  ],
};
```

Don't forget to add the new collection to your Payload config file (src/payload.config.ts).

## 4. Developing the Block Component
Create a new block component to render your feature in the layout.
### 4.1. Block Configuration

File: src/blocks/TalentCard/config.ts

```typescript
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
```

### 4.2. React Component

File: src/blocks/TalentCard/Component.tsx

```typescript
import React from 'react'
import { Media } from '@/components/Media'
import { Talent } from '@/payload-types'
import { cn } from '@/utilities/cn'

type TalentCardProps = {
  talent: Talent
}

export const TalentCardComponent: React.FC<TalentCardProps> = ({ talent }) => {
  // Component implementation
}
```
## 5. Integrating with Existing Systems
Update necessary files to integrate your new feature into the existing system.
### 5.1. Update Page Types using the generated types from Payload

**YOU SHOULD NOT MANUALLY UPDATE THE PAYLOAD-TYPES.TS FILE**
run `pnpm generate:types` to update the file

File: src/payload-types.ts

```typescript
export interface Page {
  // ... existing properties
  layout: (
    | CallToActionBlock
    | ContentBlock
    | MediaBlock
    | TalentCardBlock 
    // ... other block types
  )[];
}


export interface TalentCardBlock {
  blockType: 'talentCard';
  talent: string | Talent;
}
```
### 5.2. Update RenderBlocks Component
File: src/components/RenderBlocks.tsx

```typescript
import { TalentCardComponent } from '../blocks/TalentCard/Component';

const blockComponents = {
  // ... other block components
  talentCard: TalentCardComponent,
};

export const RenderBlocks: React.FC<{
  blocks: Page['layout']
}> = (props) => {
  // ... existing implementation
}
```

## 6. Styling and Responsiveness
Ensure your component is styled correctly and responsive across different device sizes.

Use Tailwind CSS classes for styling
Implement responsive design using Tailwind's responsive prefixes
Ensure compatibility with both light and dark modes

Example:
```html
<div className="w-full md:w-1/2 p-4">
  <div className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden">
    {/* Component content */}
  </div>
</div>
```
## 7. Testing
Thoroughly test your new feature:

Unit test individual components
Integration test the feature within the larger system
Test responsiveness across different screen sizes
Verify light/dark mode compatibility
Test admin functionality in Payload CMS

## 8. Documentation
Update project documentation to reflect the new feature:

Update README.md with an overview of the new feature
Add any new environment variables or configuration options
Update developer documentation with instructions for working with the new feature
If applicable, update user documentation or help guides