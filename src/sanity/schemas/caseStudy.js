export default {
  name: 'caseStudy',
  title: 'Client Case Studies & ROI',
  type: 'document',
  fields: [
    {
      name: 'clientName',
      title: 'Client / Channel Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'YouTube Growth', value: 'youtube' },
          { title: 'TikTok & Reels Viral', value: 'reels' },
          { title: 'Paid UGC & Ads', value: 'ugc' },
          { title: 'SaaS & 3D Motion', value: 'saas' }
        ]
      },
      initialValue: 'reels'
    },
    {
      name: 'headline',
      title: 'Outcome Headline',
      type: 'string',
      description: 'e.g., Scaled from 50k to 500k views in 60 days',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'metricHighlight',
      title: 'Top Metric Badge',
      type: 'string',
      description: 'e.g., +450% Retention or 3.8x ROAS',
    },
    {
      name: 'videoUrl',
      title: 'Showcase Video Link (YouTube/Vimeo)',
      type: 'url',
    },
    {
      name: 'thumbnail',
      title: 'Before/After or Thumbnail Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'problem',
      title: 'The Challenge / Bottleneck',
      type: 'text',
    },
    {
      name: 'solution',
      title: 'The Editly Foundry Solution',
      type: 'text',
    },
    {
      name: 'results',
      title: 'Measurable Results',
      type: 'array',
      of: [{ type: 'string' }],
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
      title: 'clientName',
      subtitle: 'headline',
      media: 'thumbnail'
    }
  }
}
