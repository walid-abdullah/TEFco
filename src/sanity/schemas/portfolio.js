export default {
  name: 'portfolio',
  title: 'Work videos',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'clientName',
      title: 'Client name',
      type: 'string',
      description: 'Shown under the video. Optional.',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Podcast', value: 'podcast' },
          { title: 'Talking head', value: 'talking-head' },
          { title: 'Reels & Shorts', value: 'reels' },
          { title: 'Motion graphics', value: 'saas' },
          { title: 'Promo & Ads', value: 'promo' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: { hotspot: true },
      description: 'Optional for YouTube videos, which use their own thumbnail.',
    },
    {
      name: 'videoUrl',
      title: 'Video link',
      type: 'url',
      description: 'YouTube or Vimeo link. A project appears on the site only once this is filled in.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'orientation',
      title: 'Video shape',
      type: 'string',
      options: {
        list: [
          { title: 'Landscape (16:9)', value: 'landscape' },
          { title: 'Portrait (9:16)', value: 'portrait' },
        ],
        layout: 'radio',
      },
      initialValue: 'landscape',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Lower numbers show first. The first three also appear on the homepage.',
    },
    {
      name: 'metric1Icon',
      hidden: true,
      title: 'Metric 1 Icon (FontAwesome class)',
      type: 'string',
      description: 'e.g., fa-solid fa-eye',
      initialValue: 'fa-solid fa-eye',
    },
    {
      name: 'metric1Text',
      hidden: true,
      title: 'Metric 1 Text',
      type: 'string',
      description: 'e.g., 2.4M Views',
    },
    {
      name: 'metric2Icon',
      hidden: true,
      title: 'Metric 2 Icon (FontAwesome class)',
      type: 'string',
      description: 'e.g., fa-solid fa-heart',
    },
    {
      name: 'metric2Text',
      hidden: true,
      title: 'Metric 2 Text',
      type: 'string',
      description: 'e.g., 180K Likes',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'clientName',
      media: 'thumbnail',
    },
  },
}
