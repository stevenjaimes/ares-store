/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "https",
				hostname: "home-style-nook.vercel.app", 
             

			},
		],
	},
};

module.exports = nextConfig;
