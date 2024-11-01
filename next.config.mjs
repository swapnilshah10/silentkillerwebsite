/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['i.ytimg.com'], // Add your image domains here
      },
      async headers() {
        return [
          {
            source: '/backgroundd.gif', // Change to the path of your GIF
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=31536000, immutable', // Caches for 1 year
              },
            ],
          },
        ]
      },
};

export default nextConfig;
