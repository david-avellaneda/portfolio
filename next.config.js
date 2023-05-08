/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
    localeDetection: false,
  },
};

module.exports = nextConfig;
