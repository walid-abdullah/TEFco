export default {
  name: 'pricing',
  title: 'Pricing Retainers',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Plan Name',
      type: 'string',
      description: 'e.g., Starter Creator, Growth Brand, Scale & Enterprise',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'badge',
      title: 'Availability Badge Text',
      type: 'string',
      description: 'e.g., 🔥 Only 2 Slots Left, Hurry! or 3 Slots Available',
    },
    {
      name: 'description',
      title: 'Plan Summary / Description',
      type: 'text',
      description: 'Short explanation of who this plan is for.',
    },
    {
      name: 'monthlyPrice',
      title: 'Monthly Price ($)',
      type: 'number',
      description: 'e.g., 1499 or 2899 (Leave empty for custom pricing)',
    },
    {
      name: 'quarterlyPrice',
      title: 'Quarterly Price / mo ($)',
      type: 'number',
      description: 'e.g., 1274 or 2464',
    },
    {
      name: 'duration',
      title: 'Price Duration Text',
      type: 'string',
      description: 'e.g., / month',
      initialValue: '/ month',
    },
    {
      name: 'isPopular',
      title: 'Highlight as Most Popular?',
      type: 'boolean',
      description: 'Adds glowing border and recommended pill',
      initialValue: false,
    },
    {
      name: 'features',
      title: 'Features List',
      type: 'array',
      of: [{ type: 'string' }],
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
