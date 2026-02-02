import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    cacheComponents: true,
    reactCompiler: true,
    compiler: {
      removeConsole: true,
    },
    logging: {
      fetches: {
        fullUrl: true
      }
    }
};

export default nextConfig;
