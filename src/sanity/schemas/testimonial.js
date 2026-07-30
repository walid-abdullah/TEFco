export default {
  name: 'testimonial',
  title: 'Testimonials (Reviews)',
  type: 'document',
  fields: [
    {
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'clientRole',
      title: 'Client Role / Company',
      type: 'string',
    },
    {
      name: 'clientImage',
      title: 'Client Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'isVideo',
      title: 'Is this a Video Testimonial?',
      type: 'boolean',
      description: 'Check this if this is for the Video Testimonial section. Leave unchecked for the scrolling text marquee.',
      initialValue: false,
    },
    {
      name: 'videoUrl',
      title: 'Video Link (e.g. YouTube/Vimeo/Direct)',
      type: 'url',
      hidden: ({ document }) => !document?.isVideo,
    },
    {
      name: 'videoThumbnail',
      title: 'Video Thumbnail',
      type: 'image',
      options: { hotspot: true },
      hidden: ({ document }) => !document?.isVideo,
    },
    {
      name: 'review',
      title: 'Review Text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Rating (1-5)',
      type: 'number',
      initialValue: 5,
      validation: (Rule) => Rule.min(1).max(5),
    }
  ],
  preview: {
    select: {
      title: 'clientName',
      subtitle: 'clientRole',
      media: 'clientImage',
    },
  },
}
