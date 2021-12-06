const { postCssLoader } = require('../loaders');

module.exports = [
  {
    test: /\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        // options: {
        //   importLoaders: 1,
        //   modules: true,
        //   // modules: {
        //   //   mode: 'local',
        //   // },
        // },
      },
      postCssLoader,
    ],
  },
];
