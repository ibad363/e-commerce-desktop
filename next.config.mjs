/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io'], // Sanity ki CDN ko allowed domains mein add karein
      },
};

export default nextConfig;
