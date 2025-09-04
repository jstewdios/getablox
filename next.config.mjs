/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true } // helpful for Netlify static deployments
};
export default nextConfig;
