import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      { source: '/fiberglass', destination: '/fiberglass-blow-in-insulation', permanent: true },
      { source: '/retrofitting', destination: '/existing-homes', permanent: true },
      { source: '/remodels', destination: '/remodels-additions', permanent: true },
      { source: '/commercial', destination: '/commercial-buildings', permanent: true },
      { source: '/pole-barns', destination: '/pole-barns-agricultural-buildings', permanent: true },
    ];
  },
};

export default nextConfig;
