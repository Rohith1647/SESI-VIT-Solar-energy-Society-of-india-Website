import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'react-icons',
      '@sanity/icons',
      'framer-motion',
      'three',
      '@react-three/drei',
      'swiper',
      'gsap',
    ],
  },
};

export default nextConfig;
