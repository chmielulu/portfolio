/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: {
      displayName: process.env.NODE_ENV === "development",
    },
  },
};

module.exports = nextConfig;
