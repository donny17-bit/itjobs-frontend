/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URL_BACKEND: "",
    URL_CLOUDINARY:
      "https://res.cloudinary.com/itjobs/image/upload/v1654266716/",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
