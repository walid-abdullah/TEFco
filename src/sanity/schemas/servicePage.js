export default {
  name: 'servicePage',
  title: 'Service Detail Pages',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title (Internal)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heroBadgeText',
      title: 'Hero Badge Text',
      type: 'string',
      description: 'e.g., Talking Head & YouTube',
    },
    {
      name: 'heroBadgeIcon',
      title: 'Hero Badge Icon Class',
      type: 'string',
      description: 'e.g., fa-brands fa-youtube',
    },
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'e.g., Polished YouTube Edits. (Use *word* for highlight color)',
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
    },
    {
      name: 'aboutTitle',
      title: 'About Section Title',
      type: 'string',
      description: 'e.g., Why Our YouTube Edits Convert? (Use *word* for highlight color)',
    },
    {
      name: 'aboutDescription',
      title: 'About Section Description',
      type: 'text',
    },
    {
      name: 'aboutImage',
      title: 'About Section Image (Thumbnail)',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'aboutHighlights',
      title: 'About Highlights',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'FontAwesome Icon Class', type: 'string', description: 'e.g., fa-solid fa-scissors' },
            { name: 'title', title: 'Highlight Title', type: 'string' },
            { name: 'description', title: 'Highlight Description', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'portfolioTitle',
      title: 'Portfolio Section Title',
      type: 'string',
      description: 'e.g., Recent YouTube Videos We Edited (Use *word* for highlight color)',
    },
    {
      name: 'portfolioSubtitle',
      title: 'Portfolio Section Subtitle',
      type: 'string',
      description: 'e.g., YouTube Case Studies',
    },
    {
      name: 'portfolioItems',
      title: 'Selected Portfolio Items',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'portfolio' }] }],
    },
    {
      name: 'pricingPackages',
      title: 'Pricing Packages for this Service',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'pricing' }] }],
    }
  ],
}
