import type { NextConfig } from "next";

/**
 * Static export for GitHub Pages. The site is served from a sub-path
 * (/MahaveerFurniture), set via NEXT_PUBLIC_BASE_PATH in the deploy workflow.
 * Leave it unset for local development or a custom domain at the root.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    // GitHub Pages has no image-optimisation server; source photos are pre-sized instead.
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
