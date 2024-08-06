/** @type {import('next').NextConfig} */
import {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} from 'next/constants.js';

const defaultConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.annihil.us',
      },
    ],
  },
  compiler: {
    reactRemoveProperties: { properties: ['^data-testid$'] },
    removeConsole: true,
  },
};

export default (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return import('./next.config.dev.mjs').then((devConfig) => ({
      ...defaultConfig,
      ...devConfig.default,
    }));
  }

  if (
    phase === PHASE_PRODUCTION_BUILD &&
    process.env.APP_ENV === 'development'
  ) {
    return import('./next.config.dev.mjs').then((devConfig) => ({
      ...defaultConfig,
      ...devConfig.default,
    }));
  }

  return defaultConfig;
};
