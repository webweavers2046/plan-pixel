/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        "lh3.googleusercontent.com",
        "firebasestorage.googleapis.com",
        "https://lh3.googleusercontent.com/",
        "i.ibb.co",
        "https://images.pexels.com"
        
      ],
    },
  };
  
  module.exports = {
    ...nextConfig, // Spread the properties of nextConfig
    async headers() {
      return [
        {
          // matching all API routes
          source: "/api/:path*",
          headers: [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "*" },
            {
              key: "Access-Control-Allow-Methods",
              value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
            },
            {
              key: "Access-Control-Allow-Headers",
              value:
                "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
            },
          ],
        },
      ];
    },
  };
  