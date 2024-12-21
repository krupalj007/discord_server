// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = { 
    webpack: (config) => {
        if (!config.externals) {
            config.externals = {};
        }
        config.externals.push({
            "utf-8-validate" : "commonjs utf-8-validate",
            bufferutil: "commonjs bufferutils",
        });
        return config;
    },
    images: {
        // Use remotePatterns instead of domains
        domains: [
            'utfs.io',
            'img.clerk.com',
        ],
    },
};

module.exports = nextConfig;
