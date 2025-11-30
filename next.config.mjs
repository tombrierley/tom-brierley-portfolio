/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable styled-components support
  compiler: {
    styledComponents: true,
  },
  // SEO optimization
  trailingSlash: false,
  generateEtags: false,
  poweredByHeader: false,
  // Performance optimizations
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}

export default nextConfig