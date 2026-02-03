import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    cacheComponents: true,
    reactCompiler: true,
    // compiler: {
    //   // Only remove console in production, keep it in development
    //   removeConsole: process.env.NODE_ENV === 'production',
    // },
    logging: {
      fetches: {
        fullUrl: true
      }
    }
};

export default nextConfig;
