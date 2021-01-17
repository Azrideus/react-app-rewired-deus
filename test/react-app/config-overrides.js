const {
  override,
} = require('customize-cra-deus');

// override
module.exports = {
  webpack: override(
    // customize-cra-deus plugins here

    (config) => {
      return config;
    }
  ),

  jest: (config) => {
    return config;
  },

  devServer: (configFunction) => (proxy, allowedHost) => {
    const config = configFunction(proxy, allowedHost);
    return config;
  },

  paths: (paths, env) => {
    return paths;
  },
};