export default {
  name: 'clientLogo',
  title: 'Client & Partner Logos',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Company/Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      description: 'Upload a transparent PNG logo for best results (white or light colored if your background is dark)',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      initialValue: 0,
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
  },
}
