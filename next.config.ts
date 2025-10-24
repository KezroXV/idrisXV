import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["@/components"],
  },
  // Optimize font loading
  optimizeFonts: true,
};

export default withNextIntl(nextConfig);
