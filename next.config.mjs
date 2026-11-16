/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep the same URLs as the original site (/services/, /about/ ...), so search rankings carry over.
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
