/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "m.media-amazon.com",
      },

      {
        hostname: "lh3.googleusercontent.com",
      },
      {
        hostname: "firebasestorage.googleapis.com"
      }
    ],
  },
};
module.exports = nextConfig;
