const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [postcssPresetEnv(/* pluginOptions */)],
    },
  },
};
