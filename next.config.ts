import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/github-pages-test",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
