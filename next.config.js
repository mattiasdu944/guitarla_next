/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:['localhost','res.cloudinary.com']
  },
  swcMinify: true,
}

module.exports = nextConfig
