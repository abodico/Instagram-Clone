/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        contentDispositionType: "attachment",
        contentSecurityPolicy:
            "default-src 'self'; script-src 'none'; sandbox;",
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*.fna.fbcdn.net",
            },
            {
                protocol: "https",
                hostname: "*.cdninstagram.com",
            },
        ],
    },
}
module.exports = nextConfig
