import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  redirects: async () => {
    return [
      {
        source: "/pacotes",
        destination: "/packages",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
