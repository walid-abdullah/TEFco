export default {
  name: 'team',
  title: 'Team Members',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role / Position',
      type: 'string',
      description: 'e.g., Founder & CEO',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'isFounder',
      title: 'Is this a Founder / Leader?',
      type: 'boolean',
      description: 'Check this if they should be displayed in the large highlight section. Leave unchecked for the small sliding marquee section.',
      initialValue: false,
    },
    {
      name: 'bio',
      title: 'Short Bio',
      type: 'text',
    },
    {
      name: 'facebookUrl',
      title: 'Facebook URL (Optional)',
      type: 'url',
    },
    {
      name: 'linkedinUrl',
      title: 'LinkedIn URL (Optional)',
      type: 'url',
    },
    {
      name: 'instagramUrl',
      title: 'Instagram URL (Optional)',
      type: 'url',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 1,
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
}
