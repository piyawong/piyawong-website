import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },

  /* config options here */
};

export default nextConfig;
