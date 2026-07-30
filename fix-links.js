import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'uwxs5zka',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'skbjpBDBmasBB182QZC2Wm4d6WMGoSMoYJpZj0jbiYbsEA0cYscCEIVwFNqYBw1PtDh2ca3ciDafSkgekh8WunSJlkh0XsvNQGd7hzGbnd8Rivu03dkfVnHVrQak0U2Whbb6E80Ma4uTh430sWA8hXiqtoAPWvxcSOeaiyXMs68mD5tmgI4t',
});

async function fixLinks() {
  const services = await client.fetch(`*[_type == "service"]`);
  for (const s of services) {
    if (s.link && !s.link.startsWith('/services/')) {
      const newLink = `/services${s.link}`;
      await client.patch(s._id).set({ link: newLink }).commit();
      console.log(`Updated link for ${s.title}: ${newLink}`);
    }
  }
}
fixLinks();
