/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
			},
			{
				protocol: 'https',
				hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
			},
		],
	},
};

module.exports = nextConfig;
