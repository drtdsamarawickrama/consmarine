import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep Next.js anchored to this project when another package-lock.json
  // exists in a parent Windows folder.
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
