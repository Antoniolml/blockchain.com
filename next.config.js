const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.pexels.com", "images.unsplash.com"],
  },
};

module.exports = withContentlayer(nextConfig);
