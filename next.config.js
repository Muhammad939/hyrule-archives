/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'botw-compendium.herokuapp.com',
        pathname: '/**',
      }
    ],
  },
};

module.exports = nextConfig; 