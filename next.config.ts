import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static exports
  },
  // Optional: Add basePath if deploying to a subdirectory
  // basePath: '/your-repo-name',
  // Optional: Enable React Strict Mode for better development experience
  reactStrictMode: true,
};

export default nextConfig;
