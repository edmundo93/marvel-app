/** @type {import('next').NextConfig} */
// const withPlugins = require('next-compose-plugins');

import withPlugins from 'next-compose-plugins';

const devConfig = withPlugins([], {
  webpack: (config, { dev }) => {
    if (dev) {
      config.optimization.minimize = false;
      config.optimization.concatenateModules = true;
    }
    return config;
  },
});

export default devConfig;
