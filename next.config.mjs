/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/((?!admin).*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // The old address sends visitors and search engines to the real domain.
      // API routes stay put so webhooks registered on the old address keep working.
      {
        source: '/:path((?!api/).*)',
        has: [{ type: 'host', value: 'editlyfoundry.vercel.app' }],
        destination: 'https://editlyfoundry.studio/:path',
        permanent: true,
      },
      {
        source: '/booking',
        destination: '/book-a-call',
        permanent: true,
      },
      {
        source: '/founder-call',
        destination: '/book-a-call',
        permanent: true,
      },
      {
        source: '/services/saas-motion',
        destination: '/services/motion-graphics',
        permanent: true,
      },
      {
        source: '/article',
        destination: '/blogs',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

export default nextConfig;
