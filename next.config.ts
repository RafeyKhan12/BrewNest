import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "imgs.search.brave.com",
      pathname: "/**"
    },
    {
      hostname: "images.unsplash.com"
    },
    {
      hostname: "plus.unsplash.com"
    },
  ]
  }
};

export default nextConfig;