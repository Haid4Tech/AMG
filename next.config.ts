import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["@mui/icons-material"],
  },
  images: {
    remotePatterns: [
      "images.unsplash.com",
      "plus.unsplash.com",
      "fra1.digitaloceanspaces.com",
      "via.placeholder.com",
    ].map((hostname) => ({
      protocol: "https",
      hostname,
      port: "",
    })),
  },
};

export default nextConfig;
