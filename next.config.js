/** @type {import('next').NextConfig} */
const repo = "portfolio-anis-main"

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
}

module.exports = nextConfig
