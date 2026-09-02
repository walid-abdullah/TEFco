/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
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
