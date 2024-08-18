/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.vercel.com', 'images.pexels.com', 'www.novafreitas.com', 'lh3.googleusercontent.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig


