/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
    return [
      {
        source: '/', 
        destination: '/login', 
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true, 
  env: {
    API_URL_PHOTOS: process.env.API_URL_PHOTOS,
  },
};

export default nextConfig;
