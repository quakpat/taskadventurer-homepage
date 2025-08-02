/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true, // Disable image optimization for local images
  },
}

module.exports = nextConfig 