const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  jest: {
    configure(config) {
      config.transformIgnorePatterns = [
        '<rootDir>/node_modules/(?!axios|@fontsource)',
      ];
      return config;
    },
  },
};
