const {
  postCssLoader,
  sassLoader,
} = require('../loaders');

module.exports = [
  {
    test: /\.scss$/,
    exclude: /\.(icss|module)\.scss$/,
    use: [
      // Creates `style` nodes from JS strings
      'style-loader',
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
          // not sure why some of these configs don't work, but it's
          // likely because sass-loader prioritizes file naming
          // over this config (i.e. 2 css-loader configs) in codesandbox
          modules: {
            mode: 'icss',
          },
        },
      },
      // autoprefix supported browserslist config
      postCssLoader,
      // Compiles Sass to CSS
      sassLoader,
    ],
  },
  // opt-in css module support
  // helps support scss -> js communication
  {
    test: /\.(icss|module)\.scss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
          // modules: true, // same as `modules.mode == 'local'`
          modules: {
            mode: 'local',
          },
        },
      },
      postCssLoader,
      sassLoader,
    ],
  },
];
