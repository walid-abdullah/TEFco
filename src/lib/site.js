// Single source of truth for the public URL. Set NEXT_PUBLIC_SITE_URL when the final domain is live.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://editlyfoundry.vercel.app').replace(/\/$/, '');
