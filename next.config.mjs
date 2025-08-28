import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  transpilePackages: ["@whatisjery/react-fluid-distortion"],

  sassOptions: {
    includePaths: [path.join(__dirname, "styles"), "./components"],
    prependData: `@import 'styles/_config'; @import 'styles/_functions';`,
  },
}

export default nextConfig
