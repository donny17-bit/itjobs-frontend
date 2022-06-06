/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URL_BACKEND: "https://itjobsproject.herokuapp.com/",
  },
};

module.exports = nextConfig;
