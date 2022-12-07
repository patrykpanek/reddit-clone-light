/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['socialmediaexaminer.com', 'avatars.dicebear.com'],
  },
};

module.exports = nextConfig;
