const presetEnv = require('postcss-preset-env');
const autoprefixer = require("autoprefixer");
const nesting = require("postcss-nesting");

const config = {
  plugins: [
    autoprefixer,
    presetEnv({
      minimumVendorImplementations: 2
    }),
    nesting(),  
  ],
};

module.exports = config;
