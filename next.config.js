/** @type {import('next').NextConfig} */
const { withSentryConfig } = require('@sentry/nextjs');
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
  env: {},
  publicRuntimeConfig: {},
  serverRuntimeConfig: {},
  eslint: {
    dirs: ['src'],
  },
}

const sentryWebpackPluginOptions = {
  silent: true, // Suppresses all logs
  disableClientWebpackPlugin: true,
  hideSourceMaps: false,
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

module.exports = async (phase) => {
  console.log('Starting at phase:', phase);
  /**
   ** Each phase with related next command:
   * next build => phase-production-build
   * next start => phase-production-server
   * next dev   => phase-development-server
   */

  // await dbConnect();

  return withSentryConfig(nextConfig,
    sentryWebpackPluginOptions
  );
};
module.exports = nextConfig
