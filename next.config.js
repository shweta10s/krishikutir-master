// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // This tells Next.js to export static files into an `out` folder
  output: 'export',

  // Because Next.js image optimization requires a server,
  // we disable it for static export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
