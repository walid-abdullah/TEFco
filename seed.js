import { createClient } from '@sanity/client';
import fs from 'fs';

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

const data = {
  services: [
    {
      title: 'Talking Head & YouTube',
      description: 'Polished YouTube video editing, narrative pacing, color correction, and eye-catching custom thumbnail design.',
      features: ['Dynamic Pacing & Cuts', 'High CTR Thumbnails'],
      link: '/youtube',
      imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'UGC Ads & E-Commerce',
      description: 'High-converting User-Generated Content ads tailored for Meta, TikTok, and YouTube Shorts.',
      features: ['Direct-Response Hooks', 'Split-Test Variations'],
      link: '/ugc',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'SaaS Motion Graphics',
      description: 'Clean product walkthroughs, animated UI demos, 2D vector explainers, and software launch videos.',
      features: ['Smooth UI Cursor Movement', 'App Mockup Animations'],
      link: '/saas',
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80',
    }
  ],
  portfolio: [
    {
      title: 'Viral Tech Founder Reel',
      clientName: 'Alex Rivera (SaaS Founder)',
      category: 'reels',
      videoUrl: '',
      metric1Icon: 'fa-solid fa-eye',
      metric1Text: '2.4M Views',
      metric2Icon: 'fa-solid fa-heart',
      metric2Text: '180K Likes',
      imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Multi-Cam Studio Episode',
      clientName: 'The Mindset Show',
      category: 'podcast',
      videoUrl: '',
      metric1Icon: 'fa-solid fa-clock',
      metric1Text: '45 Mins',
      metric2Icon: 'fa-solid fa-thumbs-up',
      metric2Text: '98.4% Retention',
      imageUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Product Launch Demo',
      clientName: 'FlowDesk App',
      category: 'saas',
      videoUrl: '',
      metric1Icon: 'fa-solid fa-chart-line',
      metric1Text: '+340% Conversions',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    }
  ],
  pricing: [
    {
      title: 'Podcast: Standard',
      subtitle: 'For clean, professional episodes',
      price: '$499/episode',
      features: ['Up to 60 Mins Raw Footage', 'Color Grading & Audio Eq', '2 Revisions', '72-Hour Turnaround'],
      isPopular: false,
      order: 1
    },
    {
      title: 'Podcast: Growth',
      subtitle: 'Maximize organic reach',
      price: '$899/episode',
      features: ['Up to 90 Mins Raw Footage', '10 Extracted Viral Reels', 'Unlimited Revisions', '48-Hour Turnaround'],
      isPopular: true,
      order: 2
    },
    {
      title: 'Reels: Creator',
      subtitle: 'Consistent daily posts',
      price: '$999/month',
      features: ['15 Custom Edited Reels', 'Dynamic Captions', 'Trending Audio Selection', 'Dedicated Slack Channel'],
      isPopular: false,
      order: 3
    }
  ],
  team: [
    {
      name: 'Walid Abdullah',
      role: 'Founder & CEO',
      bio: 'Walid leads the strategic vision at Editly Foundry, bringing years of expertise in digital media, algorithm growth, and high-retention video production.',
      facebookUrl: 'https://www.facebook.com/editly.foundry/',
      linkedinUrl: 'https://www.linkedin.com/in/walid-abdullah/',
      instagramUrl: 'https://www.instagram.com/theeditly_foundry/',
      order: 1
    }
  ]
};

async function seed() {
  try {
    console.log('Seeding Pricing...');
    for (const item of data.pricing) {
      await client.create({ _type: 'pricing', ...item });
      console.log(`- Created: ${item.title}`);
    }

    console.log('Seeding Team...');
    for (const item of data.team) {
      await client.create({ _type: 'team', ...item });
      console.log(`- Created: ${item.name}`);
    }

    console.log('Seeding Services...');
    for (const item of data.services) {
      const imageObj = await uploadImageFromUrl(item.imageUrl);
      delete item.imageUrl;
      await client.create({ _type: 'service', image: imageObj, ...item });
      console.log(`- Created: ${item.title}`);
    }

    console.log('Seeding Portfolio...');
    for (const item of data.portfolio) {
      const imageObj = await uploadImageFromUrl(item.imageUrl);
      delete item.imageUrl;
      await client.create({ _type: 'portfolio', thumbnail: imageObj, ...item });
      console.log(`- Created: ${item.title}`);
    }

    console.log('✅ ALL SEEDING COMPLETE!');
  } catch (error) {
    console.error('Error seeding data:', error.message);
  }
}

seed();
