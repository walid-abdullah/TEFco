export default {
  name: 'pricing',
  title: 'Pricing Packages',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Package Title',
      type: 'string',
      description: 'e.g., Podcast: Growth',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'e.g., Maximize organic reach',
    },
    {
      name: 'price',
      title: 'Price / Rate',
      type: 'string',
      description: 'e.g., $899/episode',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'features',
      title: 'Features List',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'isPopular',
      title: 'Mark as Most Popular?',
      type: 'boolean',
      description: 'Highlights this package in the pricing table',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this appears (1, 2, 3...)',
      initialValue: 1,
    }
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
}
