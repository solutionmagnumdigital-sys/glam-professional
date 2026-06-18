import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.17"],

  typescript: {
    ignoreBuildErrors: true,
  },

  turbopack: {
    root: __dirname,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i1-e.pinimg.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;