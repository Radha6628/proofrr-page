import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://res.cloudinary.com/djxnyqaya/image/upload/v1766374668/Proofrr_Square_Logo_1_xvxkqb.svg",
      ),
    ],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
