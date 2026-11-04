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
      description: "A transparent PNG works best. It shows on a small white tile.",
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
