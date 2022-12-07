/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/Hey/:path*',
        destination: '/Main',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/custom',
        destination: `https://jsonplaceholder.typicode.com/${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
