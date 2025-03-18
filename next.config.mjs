/** @type {import('next').NextConfig} */
import mdx from "@next/mdx";


const withMDX = mdx({
  extension: /\.mdx?$/
});

const nextConfig = withMDX({
  pageExtensions: ["js", "jsx", "mdx"]
});  

export default nextConfig;
