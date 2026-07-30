import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'uwxs5zka',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'skbjpBDBmasBB182QZC2Wm4d6WMGoSMoYJpZj0jbiYbsEA0cYscCEIVwFNqYBw1PtDh2ca3ciDafSkgekh8WunSJlkh0XsvNQGd7hzGbnd8Rivu03dkfVnHVrQak0U2Whbb6E80Ma4uTh430sWA8hXiqtoAPWvxcSOeaiyXMs68mD5tmgI4t',
});

async function uploadImageFromUrl(url) {
  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const asset = await client.assets.upload('image', buffer);
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    };
  } catch (err) {
    console.error('Error uploading image:', url, err.message);
    return null;
  }
}

const testimonials = [
  {
    clientName: 'David Chen',
    clientRole: 'Founder, TechFlow',
    review: 'Great service.',
    rating: 5,
    isVideo: true,
    videoUrl: 'https://youtube.com'
  },
  {
    clientName: 'Sarah J.',
    clientRole: 'Tech Creator (1.2M Subs)',
    review: 'Awesome edits.',
    rating: 5,
    isVideo: true,
    videoUrl: 'https://youtube.com'
  },
  {
    clientName: 'Michael R.',
    clientRole: 'Creative Director',
    review: 'Loved the fast turnaround.',
    rating: 5,
    isVideo: true,
    videoUrl: 'https://youtube.com'
  },
  {
    clientName: 'Elena V.',
    clientRole: 'Podcast Host',
    review: 'Very professional.',
    rating: 5,
    isVideo: true,
    videoUrl: 'https://youtube.com'
  },
  // Text
  {
    clientName: 'Marcus T.',
    clientRole: 'Marketing Agency Owner',
    review: 'Working with Editly Foundry changed the game for our agency. Their turnaround time is insane and the quality is unmatched. We saw a 3x increase in retention on our Shorts within the first month.',
    rating: 5,
    isVideo: false,
  },
  {
    clientName: 'Jessica W.',
    clientRole: 'Podcast Host',
    review: 'The multi-cam podcast edits they deliver are studio-grade. They know exactly when to cut, when to zoom, and how to keep the audience engaged. Best investment for our show.',
    rating: 5,
    isVideo: false,
  },
  {
    clientName: 'Ryan K.',
    clientRole: 'SaaS Founder',
    review: 'Walid and his team are phenomenal. We outsourced all our YouTube long-form editing to them, and it freed up 20 hours a week for me to just focus on recording. Highly recommended.',
    rating: 5,
    isVideo: false,
  },
  {
    clientName: 'Sophia L.',
    clientRole: 'Lifestyle Creator',
    review: 'Great communication and fantastic edits. The color grading on our lifestyle vlogs was completely transformed. Exactly what our brand needed!',
    rating: 4.9,
    isVideo: false,
  },
  {
    clientName: 'Emily R.',
    clientRole: 'Fitness Vlogger',
    review: 'Their editing style is extremely engaging. My watch time literally doubled after I switched to Editly Foundry. They just know what works.',
    rating: 5,
    isVideo: false,
  },
  {
    clientName: 'Alex M.',
    clientRole: 'Real Estate Agent',
    review: 'They took my boring property tours and turned them into cinematic masterpieces. The ROI from their TikTok ad edits has been incredible.',
    rating: 5,
    isVideo: false,
  }
];

const servicePages = [
  {
    title: 'Talking Head & YouTube',
    slug: { _type: 'slug', current: 'youtube' },
    heroBadgeText: 'Talking Head & YouTube',
    heroBadgeIcon: 'fa-brands fa-youtube',
    heroTitle: 'Polished *YouTube Edits.*',
    heroSubtitle: 'We craft crisp, engaging talking-head videos with dynamic pacing, color correction, and custom eye-catching thumbnails to skyrocket your channel growth.',
    aboutTitle: 'Why Our *YouTube Edits Convert?*',
    aboutDescription: 'YouTube requires relentless attention to detail. We ensure your videos have the perfect blend of narrative flow, visual stimulation, and auditory clarity.',
    aboutImageUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
    aboutHighlights: [
      { icon: 'fa-solid fa-scissors', title: 'Dynamic Pacing & Cuts', description: 'Removing dead air and keeping the energy high.' },
      { icon: 'fa-solid fa-image', title: 'High CTR Thumbnails', description: 'Custom designed thumbnails that demand clicks.' },
      { icon: 'fa-solid fa-layer-group', title: 'Engaging B-Roll & Graphics', description: 'Visual aids to support your storytelling.' },
      { icon: 'fa-solid fa-music', title: 'Sound & Music Design', description: 'Setting the right mood for every segment.' }
    ],
    portfolioTitle: 'Recent YouTube *Videos We Edited*',
    portfolioSubtitle: 'YouTube Case Studies'
  },
  {
    title: 'Short Form & TikToks',
    slug: { _type: 'slug', current: 'reels' },
    heroBadgeText: 'Reels, TikTok & Shorts',
    heroBadgeIcon: 'fa-brands fa-tiktok',
    heroTitle: 'Viral *Short-Form Edits.*',
    heroSubtitle: 'Capture attention in the first 3 seconds with fast-paced cuts, trending audio, and dynamic captions designed specifically for algorithmic growth.',
    aboutTitle: 'Mastering the *Short-Form Algorithm*',
    aboutDescription: 'The short-form game is won or lost in milliseconds. We optimize every frame to maximize retention and replay value across all platforms.',
    aboutImageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    aboutHighlights: [
      { icon: 'fa-solid fa-bolt', title: 'Aggressive Hooks', description: 'Visual and auditory hooks to stop the scroll.' },
      { icon: 'fa-solid fa-closed-captioning', title: 'Dynamic Hormozi Captions', description: 'Animated text that keeps eyes locked.' },
      { icon: 'fa-solid fa-rocket', title: 'Trend Optimization', description: 'Matching edits to current platform trends.' },
      { icon: 'fa-solid fa-crop', title: 'Platform Native Framing', description: 'Perfect 9:16 safe-zone optimization.' }
    ],
    portfolioTitle: 'Viral *Short-Form Campaigns*',
    portfolioSubtitle: 'Shorts Case Studies'
  },
  {
    title: 'UGC Ads & E-Commerce',
    slug: { _type: 'slug', current: 'ugc' },
    heroBadgeText: 'Direct Response Video Ads',
    heroBadgeIcon: 'fa-solid fa-cart-shopping',
    heroTitle: 'Ads That *Actually Convert.*',
    heroSubtitle: 'We transform raw UGC and product footage into high-performing video ads utilizing proven direct-response marketing psychology and split-testing variations.',
    aboutTitle: 'The *Anatomy of a Winning Ad*',
    aboutDescription: 'Beautiful videos don\'t always sell. We focus on the core elements that drive conversions: relatable hooks, clear problem/solution setups, and irresistible calls to action.',
    aboutImageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    aboutHighlights: [
      { icon: 'fa-solid fa-magnifying-glass', title: 'Problem/Solution Framework', description: 'Clearly highlighting the pain point and fix.' },
      { icon: 'fa-solid fa-shuffle', title: 'A/B Testing Variations', description: 'Multiple hooks and CTAs for testing.' },
      { icon: 'fa-solid fa-mobile-screen', title: 'Native Social Feel', description: 'Ads that don\'t look like ads.' },
      { icon: 'fa-solid fa-chart-line', title: 'Conversion Focused', description: 'Edits optimized for lowest CPA.' }
    ],
    portfolioTitle: 'High ROI *Ad Creatives*',
    portfolioSubtitle: 'UGC Case Studies'
  },
  {
    title: 'SaaS Motion Graphics',
    slug: { _type: 'slug', current: 'saas' },
    heroBadgeText: 'SaaS & Product Demos',
    heroBadgeIcon: 'fa-solid fa-laptop-code',
    heroTitle: 'Clear *Product Walkthroughs.*',
    heroSubtitle: 'Turn complex software into easy-to-understand visual stories with sleek motion graphics, smooth UI animations, and professional voiceovers.',
    aboutTitle: 'Simplifying the *Complex*',
    aboutDescription: 'Your software solves difficult problems; explaining it shouldn\'t be one. We use clean vectors and precise animations to highlight your core value proposition.',
    aboutImageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    aboutHighlights: [
      { icon: 'fa-solid fa-arrow-pointer', title: 'Smooth UI Cursors', description: 'Guiding the eye exactly where it needs to go.' },
      { icon: 'fa-solid fa-shapes', title: 'Vector Explainers', description: 'Custom 2D motion graphics and iconography.' },
      { icon: 'fa-solid fa-microphone', title: 'Pro Voiceovers', description: 'Clear, authoritative audio narration.' },
      { icon: 'fa-solid fa-lightbulb', title: 'Feature Highlighting', description: 'Zooming and calling out key UI elements.' }
    ],
    portfolioTitle: 'SaaS *Launch Videos*',
    portfolioSubtitle: 'Software Case Studies'
  },
  {
    title: 'Podcast Production',
    slug: { _type: 'slug', current: 'podcast' },
    heroBadgeText: 'Audio & Video Podcasts',
    heroBadgeIcon: 'fa-solid fa-podcast',
    heroTitle: 'Studio-Grade *Podcasts.*',
    heroSubtitle: 'Comprehensive multi-cam podcast editing, audio mastering, and micro-content extraction to distribute your episodes across every platform.',
    aboutTitle: 'End-to-End *Podcast Solutions*',
    aboutDescription: 'We take the technical burden off your shoulders. From mixing multiple audio tracks to switching camera angles, we deliver a broadcast-ready show every time.',
    aboutImageUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
    aboutHighlights: [
      { icon: 'fa-solid fa-video', title: 'Multi-Cam Switching', description: 'Seamless cuts between hosts and guests.' },
      { icon: 'fa-solid fa-headphones', title: 'Audio Mastering', description: 'Noise reduction, EQ, and leveling.' },
      { icon: 'fa-solid fa-scissors', title: 'Clip Extraction', description: 'Pulling 3-5 viral shorts from every episode.' },
      { icon: 'fa-solid fa-closed-captioning', title: 'Lower Thirds & Titles', description: 'Professional broadcast graphics.' }
    ],
    portfolioTitle: 'Recent Podcast *Episodes We Edited*',
    portfolioSubtitle: 'Podcast Case Studies'
  },
  {
    title: 'Channel Management',
    slug: { _type: 'slug', current: 'management' },
    heroBadgeText: 'Full-Service Growth',
    heroBadgeIcon: 'fa-solid fa-chart-pie',
    heroTitle: 'YouTube *Channel Management.*',
    heroSubtitle: 'We handle everything from upload to optimization. Title A/B testing, SEO-rich descriptions, community management, and deep analytics reporting.',
    aboutTitle: 'Your Dedicated *Growth Team*',
    aboutDescription: 'Creating the video is only half the battle. We treat your channel like a business, optimizing every meta-data point to ensure the algorithm favors your content.',
    aboutImageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    aboutHighlights: [
      { icon: 'fa-solid fa-magnifying-glass-chart', title: 'SEO Optimization', description: 'Data-driven titles, tags, and descriptions.' },
      { icon: 'fa-solid fa-vial', title: 'Thumbnail A/B Testing', description: 'Swapping assets to maximize CTR.' },
      { icon: 'fa-solid fa-users', title: 'Community Engagement', description: 'Responding to comments and building loyalty.' },
      { icon: 'fa-solid fa-chart-column', title: 'Analytics Reporting', description: 'Monthly breakdowns of growth metrics.' }
    ],
    portfolioTitle: 'Channels We *Managed to Millions*',
    portfolioSubtitle: 'Growth Case Studies'
  }
];

async function seed() {
  try {
    // 1. Fetch existing references
    console.log('Fetching existing portfolio and pricing...');
    const portfolios = await client.fetch(`*[_type == "portfolio"]{_id, category}`);
    const pricing = await client.fetch(`*[_type == "pricing"]{_id, title}`);

    // Create references
    const portfolioRefs = portfolios.map(p => ({ _type: 'reference', _ref: p._id }));
    const pricingRefs = pricing.map(p => ({ _type: 'reference', _ref: p._id }));

    // 2. Seed Testimonials
    console.log('Seeding Testimonials...');
    for (const item of testimonials) {
      await client.create({ _type: 'testimonial', ...item });
      console.log(`- Created Testimonial: ${item.clientName}`);
    }

    // 3. Seed Service Pages
    console.log('Seeding Service Pages...');
    for (const page of servicePages) {
      let aboutImage = null;
      if (page.aboutImageUrl) {
        aboutImage = await uploadImageFromUrl(page.aboutImageUrl);
        delete page.aboutImageUrl;
      }

      await client.create({
        _type: 'servicePage',
        ...page,
        aboutImage: aboutImage,
        portfolioItems: portfolioRefs,
        pricingPackages: pricingRefs
      });
      console.log(`- Created Service Page: ${page.title}`);
    }

    console.log('✅ SEEDING COMPLETE!');
  } catch (err) {
    console.error('Error seeding data:', err);
  }
}

seed();
