import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: ['sequelize', 'pg', 'pg-hstore'],
  output: 'standalone',
};

export default nextConfig;
