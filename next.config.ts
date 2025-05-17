import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'fwu.edu.np',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.fwu.edu.np',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
