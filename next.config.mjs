/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "d2pas86kykpvmq.cloudfront.net",
        pathname: "/**",
      }
    ],
  },
};

export default nextConfig;
