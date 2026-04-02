/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure image domains for external images
  images: {
    domains: ["images.unsplash.com"],
    // If you want to use modern formats for better performance
    formats: ["image/avif", "image/webp"],
  },
  // Optional: If you want to use Turbopack in development (faster builds)
  // Run with: next dev --turbo
  experimental: {
    turbo: {
      // Turbo options go here if needed
    },
  },
};

module.exports = nextConfig;
