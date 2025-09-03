import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["@mui/icons-material"],
  },
  images: {
    remotePatterns: [
      "fra1.digitaloceanspaces.com",
      "impro.usercontent.one",
      "destinyimpactchurch.org",
      "via.placeholder.com",
      "images.unsplash.com",
      "plus.unsplash.com",
      "images.pexels.com",
    ].map((hostname) => ({
      protocol: "https",
      hostname,
      port: "",
    })),
  },
};

export default nextConfig;
