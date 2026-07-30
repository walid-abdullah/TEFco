export default {
  name: 'promoBanner',
  title: 'Promo Banner',
  type: 'document',
  fields: [
    {
      name: 'isActive',
      title: 'Is Banner Active?',
      type: 'boolean',
      description: 'Turn on to display the banner at the top of the website',
      initialValue: false,
    },
    {
      name: 'text',
      title: 'Banner Text',
      type: 'string',
      description: 'e.g., Get 20% off your first edit! Limited time only.',
    },
    {
      name: 'linkUrl',
      title: 'Banner Link URL (Optional)',
      type: 'string',
      description: 'Where should the user go when they click the banner? (e.g., /#pricing or https://...)',
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      description: 'CSS color code (e.g., #ff4d4d or var(--accent-blue))',
      initialValue: 'var(--accent-blue)',
    }
  ],
}
