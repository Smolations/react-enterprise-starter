const path = require('path');

const srcPath = path.resolve(__dirname, '../src');

const {
  cssRules,
  scssRules,
} = require('../webpack/rules');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    '@storybook/addon-docs',
    '@storybook/addon-essentials', // takes care of the last few we haven't added globally yet (but should)
    '@storybook/addon-links',
  ],
  framework: '@storybook/react',
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push(...scssRules);

    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.join(srcPath, 'components'),
      hooks: path.join(srcPath, 'hooks'),
      pages: path.join(srcPath, 'pages'),
      sass: path.join(srcPath, 'sass'),
      state: path.join(srcPath, 'state'),
    };

    // Return the altered config
    return config;
  },
}
