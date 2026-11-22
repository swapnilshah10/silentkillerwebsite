/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Serve thumbnails straight from YouTube's CDN: skips Vercel's image optimizer (and its quota / 402s)
        unoptimized: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.ytimg.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
      async headers() {
        return [
          {
            source: '/(.*)',
            headers: [
              {
                key: 'X-DNS-Prefetch-Control',
                value: 'on'
              },
              {
                key: 'Strict-Transport-Security',
                value: 'max-age=63072000; includeSubDomains; preload'
              },
              {
                key: 'X-Frame-Options',
                value: 'SAMEORIGIN'
              },
              {
                key: 'X-Content-Type-Options',
                value: 'nosniff'
              },
              {
                key: 'Referrer-Policy',
                value: 'origin-when-cross-origin'
              },
              {
                key: 'Permissions-Policy',
                value: 'camera=(), microphone=(), geolocation=()'
              }
            ],
          },
          {
            source: '/backgroundd.gif',
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=31536000, immutable',
              },
            ],
          },
        ]
      },
};

export default nextConfig;
