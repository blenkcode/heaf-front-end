/** @type {import('next').NextConfig} */
const config = {
  // Other config
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.innerGraph = false;
    }
    return config;
  },
};
