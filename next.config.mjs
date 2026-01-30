/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: { unoptimized: true },
	transpilePackages: ["arkiv-sdk"],
};
export default nextConfig;
