// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
// const nextConfig = {
//   webpack: (config: any) => {
//     config.module.rules.push({
//       test: /\.md$/,
//       use: "raw-loader",
//     });
//     return config;
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    rules: {
      "*.md": {
        loaders: [
          {
            loader: "raw-loader",
          },
        ],
        as: "*.js", // Treats the output as a JS module (matches your original intent)
      },
    },
  },
};

module.exports = nextConfig;
