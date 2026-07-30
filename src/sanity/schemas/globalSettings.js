export default {
  name: 'globalSettings',
  title: 'Global Settings & SEO',
  type: 'document',
  groups: [
    { name: 'general', title: 'General Info' },
    { name: 'branding', title: 'Branding & Colors' },
    { name: 'seo', title: 'SEO & Metadata' },
    { name: 'social', title: 'Social & Contact' },
    { name: 'navigation', title: 'Navigation' },
  ],
  fields: [
    // GENERAL
    { name: 'siteName', title: 'Site Name', type: 'string', group: 'general' },
    { name: 'siteLogo', title: 'Site Logo', type: 'image', options: { hotspot: true }, group: 'general' },
    { name: 'favicon', title: 'Favicon', type: 'image', group: 'general' },

    // BRANDING
    { name: 'primaryColor', title: 'Primary Color (Hex)', type: 'string', description: 'e.g., #1976D2', group: 'branding' },
    { name: 'accentColor', title: 'Accent Color (Hex)', type: 'string', description: 'e.g., #F2994A', group: 'branding' },
    {
      name: 'animationSpeed',
      title: 'Animation Speed',
      type: 'string',
      group: 'branding',
      options: {
        list: [
          { title: 'Fast (0.4s)', value: '0.4s' },
          { title: 'Normal (0.8s)', value: '0.8s' },
          { title: 'Slow (1.2s)', value: '1.2s' },
        ],
      },
    },
    {
      name: 'defaultTheme',
      title: 'Default Theme',
      type: 'string',
      group: 'branding',
      description: 'Set the default color theme for new visitors.',
      options: {
        list: [
          { title: 'Dark Mode', value: 'dark' },
          { title: 'Light Mode', value: 'light' },
        ],
        layout: 'radio'
      },
      initialValue: 'dark'
    },

    // SEO
    { name: 'seoTitle', title: 'Default SEO Meta Title', type: 'string', group: 'seo' },
    { name: 'seoDescription', title: 'Default SEO Meta Description', type: 'text', group: 'seo' },
    { name: 'seoKeywords', title: 'SEO Keywords', type: 'string', description: 'Comma-separated keywords (e.g., video editing, agency, reels)', group: 'seo' },
    { name: 'seoImage', title: 'Default Social Share Image (OG Image)', type: 'image', group: 'seo' },

    // SOCIAL & CONTACT
    { name: 'facebookLink', title: 'Facebook Link', type: 'url', group: 'social' },
    { name: 'instagramLink', title: 'Instagram Link', type: 'url', group: 'social' },
    { name: 'linkedinLink', title: 'LinkedIn Link', type: 'url', group: 'social' },
    { name: 'contactEmail', title: 'Contact Email', type: 'string', group: 'social' },

    // NAVIGATION
    {
      name: 'headerMenu',
      title: 'Header Navigation Menu',
      type: 'array',
      group: 'navigation',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'link', title: 'Link (e.g., /#services or /about)', type: 'string' }
          ]
        }
      ]
    },
    {
      name: 'footerMenu',
      title: 'Footer Quick Links',
      type: 'array',
      group: 'navigation',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'link', title: 'Link (e.g., /legal/privacy-policy)', type: 'string' }
          ]
        }
      ]
    }
  ],
  initialValue: {
    siteName: 'The Editly Foundry Co.',
    primaryColor: '#1976D2',
    accentColor: '#F2994A',
    animationSpeed: '0.8s',
    seoTitle: 'The Editly Foundry Co. | Premium Video Editing Agency',
    seoDescription: 'The Editly Foundry Co. is a premiere video editing agency specializing in Reels, Podcasts, Talking Head, UGC Ads, and SaaS Animations.',
    seoKeywords: 'video editing, agency, reels, tiktok, youtube, SaaS, video production',
    facebookLink: 'https://www.facebook.com/editly.foundry/',
    instagramLink: 'https://www.instagram.com/theeditly_foundry/',
    linkedinLink: 'https://www.linkedin.com/in/walid-abdullah/',
    contactEmail: 'hello@editlyfoundry.com'
  }
}
