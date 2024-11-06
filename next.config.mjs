/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "picsum.photos",
        protocol: "https",
      },
      { hostname: "https://themoviedb.org", protocol: "https" },
      { hostname: "image.tmdb.org", protocol: "https" },
    ],
  },
};

export default nextConfig;
