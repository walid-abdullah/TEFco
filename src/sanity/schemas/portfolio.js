export default {
  name: 'portfolio',
  title: 'Portfolio Projects',
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
      title: 'Client Name / Tag',
      type: 'string',
      description: 'e.g., Alex Rivera (SaaS Founder)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Reels & Shorts', value: 'reels' },
          { title: 'Podcasts', value: 'podcast' },
          { title: 'Talking Head', value: 'talking-head' },
          { title: 'UGC Ads', value: 'ugc' },
          { title: 'SaaS Motion', value: 'saas' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'videoUrl',
      title: 'Video Link (YouTube/Vimeo)',
      type: 'url',
    },
    {
      name: 'metric1Icon',
      title: 'Metric 1 Icon (FontAwesome class)',
      type: 'string',
      description: 'e.g., fa-solid fa-eye',
      initialValue: 'fa-solid fa-eye',
    },
    {
      name: 'metric1Text',
      title: 'Metric 1 Text',
      type: 'string',
      description: 'e.g., 2.4M Views',
    },
    {
      name: 'metric2Icon',
      title: 'Metric 2 Icon (FontAwesome class)',
      type: 'string',
      description: 'e.g., fa-solid fa-heart',
    },
    {
      name: 'metric2Text',
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
