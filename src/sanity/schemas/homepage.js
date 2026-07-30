export default {
  name: 'homepage',
  title: 'Homepage Content',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'about', title: 'About & Video' },
    { name: 'services', title: 'Services' },
    { name: 'portfolio', title: 'Portfolio' },
    { name: 'pricing', title: 'Pricing' },
    { name: 'team', title: 'Team' },
    { name: 'testimonials', title: 'Testimonials' },
    { name: 'blogs', title: 'Blogs & Insights' },
  ],
  fields: [
    // --- HERO SECTION ---
    { name: 'heroBadge', title: 'Hero Badge Text', type: 'string', group: 'hero' },
    { name: 'heroTitle1', title: 'Hero Title (White part)', type: 'string', group: 'hero' },
    { name: 'heroTitle2', title: 'Hero Title (Gradient part)', type: 'string', group: 'hero' },
    { name: 'heroDescription', title: 'Hero Description', type: 'text', group: 'hero' },

    // --- ABOUT & VIDEO ---
    { name: 'aboutSubtitle', title: 'About Subtitle', type: 'string', group: 'about' },
    { name: 'aboutTitle1', title: 'About Title (White part)', type: 'string', group: 'about' },
    { name: 'aboutTitle2', title: 'About Title (Bold part)', type: 'string', group: 'about' },
    { name: 'aboutDescription', title: 'About Description', type: 'text', group: 'about' },
    { name: 'founderVideoTitle1', title: 'Founder Video Title 1', type: 'string', group: 'about' },
    { name: 'founderVideoTitle2', title: 'Founder Video Title 2 (Colored)', type: 'string', group: 'about' },
    { name: 'founderVideoDesc', title: 'Founder Video Description', type: 'text', group: 'about' },
    { name: 'founderVideoUrl', title: 'Founder Video URL (YouTube/Vimeo)', type: 'url', group: 'about' },
    { name: 'founderVideoThumbnail', title: 'Founder Video Thumbnail', type: 'image', options: { hotspot: true }, group: 'about' },
    { name: 'viewsCount', title: 'Metrics: Total Video Views', type: 'string', group: 'about' },
    { name: 'deliveredCount', title: 'Metrics: Videos Delivered', type: 'string', group: 'about' },
    { name: 'onTimeRate', title: 'Metrics: On-Time Rate (%)', type: 'string', group: 'about' },
    { name: 'rating', title: 'Metrics: Client Rating', type: 'string', group: 'about' },

    // --- SERVICES ---
    { name: 'servicesSubtitle', title: 'Services Subtitle', type: 'string', group: 'services' },
    { name: 'servicesTitle1', title: 'Services Title (Black)', type: 'string', group: 'services' },
    { name: 'servicesTitle2', title: 'Services Title (Colored/Italic)', type: 'string', group: 'services' },
    { name: 'servicesDescription', title: 'Services Description', type: 'text', group: 'services' },

    // --- PORTFOLIO ---
    { name: 'portfolioSubtitle', title: 'Portfolio Subtitle', type: 'string', group: 'portfolio' },
    { name: 'portfolioTitle1', title: 'Portfolio Title (Black)', type: 'string', group: 'portfolio' },
    { name: 'portfolioTitle2', title: 'Portfolio Title (Colored/Italic)', type: 'string', group: 'portfolio' },
    { name: 'portfolioDescription', title: 'Portfolio Description', type: 'text', group: 'portfolio' },

    // --- PRICING ---
    { name: 'pricingSubtitle', title: 'Pricing Subtitle', type: 'string', group: 'pricing' },
    { name: 'pricingTitle1', title: 'Pricing Title (Black)', type: 'string', group: 'pricing' },
    { name: 'pricingTitle2', title: 'Pricing Title (Colored/Italic)', type: 'string', group: 'pricing' },
    { name: 'pricingDescription', title: 'Pricing Description', type: 'text', group: 'pricing' },

    // --- TEAM ---
    { name: 'teamSubtitle', title: 'Team Subtitle', type: 'string', group: 'team' },
    { name: 'teamTitle1', title: 'Team Title (Black)', type: 'string', group: 'team' },
    { name: 'teamTitle2', title: 'Team Title (Colored/Italic)', type: 'string', group: 'team' },
    { name: 'teamDescription', title: 'Team Description', type: 'text', group: 'team' },

    // --- TESTIMONIALS ---
    { name: 'testimonialsSubtitle', title: 'Testimonials Subtitle', type: 'string', group: 'testimonials' },
    { name: 'testimonialsTitle1', title: 'Testimonials Title (Black)', type: 'string', group: 'testimonials' },
    { name: 'testimonialsTitle2', title: 'Testimonials Title (Colored/Italic)', type: 'string', group: 'testimonials' },

    // --- BLOGS ---
    { name: 'blogsSubtitle', title: 'Blogs Subtitle', type: 'string', group: 'blogs' },
    { name: 'blogsTitle1', title: 'Blogs Title (Black)', type: 'string', group: 'blogs' },
    { name: 'blogsTitle2', title: 'Blogs Title (Colored/Italic)', type: 'string', group: 'blogs' },
    { name: 'blogsDescription', title: 'Blogs Description', type: 'text', group: 'blogs' },
  ],
  initialValue: {
    heroBadge: 'Premium Video Production Agency',
    heroTitle1: 'Elevate Your Video Projects.',
    heroTitle2: 'Dominate Every Feed.',
    heroDescription: 'We craft high-retention Reels, podcasts, UGC ads, and SaaS animations that capture attention, build authority, and multiply your revenue. Experience true cinematic quality.',
    aboutSubtitle: 'About Editly Foundry',
    aboutTitle1: 'Where Vision Meets',
    aboutTitle2: 'Flawless Execution',
    aboutDescription: 'We are a specialized video editing agency engineered to transform raw footage into high-retention visual assets that build authority, drive conversions, and dominate algorithms.',
    founderVideoTitle1: 'Hear Our Founder Explain',
    founderVideoTitle2: 'The Secret to Viral Content',
    founderVideoDesc: 'In this video, Walid Abdullah (Founder & Executive Producer) breaks down our entire editing pipeline, retention framework, and how we deliver studio-grade videos in under 48 hours.',
    viewsCount: '500',
    deliveredCount: '1500',
    onTimeRate: '99',
    rating: '4.9',
    servicesSubtitle: 'What We Do',
    servicesTitle1: 'Premium Video Services',
    servicesTitle2: 'Built For Scale',
    servicesDescription: "We don't just cut clips — we engineer viral hooks, retain audience attention, and drive action. Click on a service to see full portfolio and details.",
    portfolioSubtitle: 'Our Work',
    portfolioTitle1: 'Recent Work That',
    portfolioTitle2: 'Produced Results',
    portfolioDescription: 'Filter through our recent video production and editing projects across different formats.',
    pricingSubtitle: 'Transparent Pricing',
    pricingTitle1: 'Investment In',
    pricingTitle2: 'Quality',
    pricingDescription: 'Slide through our comprehensive pricing packages across all video editing services.',
    teamSubtitle: 'Leadership',
    teamTitle1: 'The Vision Behind',
    teamTitle2: 'Editly Foundry',
    teamDescription: 'Led by industry experts who understand the nuances of audience retention and viral growth.',
    blogsSubtitle: 'Resources & Insights',
    blogsTitle1: 'The Content',
    blogsTitle2: 'Playbook',
    blogsDescription: 'Explore our latest strategies, editing breakdowns, and industry insights to scale your brand.',
    testimonialsSubtitle: 'Client Feedback',
    testimonialsTitle1: 'What Creators & Brands',
    testimonialsTitle2: 'Say About Us'
  }
}
