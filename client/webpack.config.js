const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const {
  postCssLoader,
  sassLoader,
} = require('./webpack/loaders');

const {
  cssRules,
  scssRules,
} = require('./webpack/rules');

const srcPath = path.resolve(__dirname, 'src');


const babelLoader = {
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
  },
};

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  watchOptions: {
    aggregateTimeout: 200, // default: 200
    poll: 1000, // default: 1000
  },
  stats: {
    errorDetails: true,
  },
  // entry: './src/index.js',  // default
  // output: {
  //   path: path.resolve(__dirname, 'dist'), // default
  //   filename: '[name].js',  // default
  // },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    // modules: [
    //   path.join(__dirname, 'src'),
    //   'node_modules',
    // ],
    alias: {
      components: path.join(srcPath, 'components'),
      hooks: path.join(srcPath, 'hooks'),
      pages: path.join(srcPath, 'pages'),
      sass: path.join(srcPath, 'sass'),
      state: path.join(srcPath, 'state'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: babelLoader,
      },
      {
        test: /\.mdx?$/,
        use: [
          babelLoader,
          {
            loader: '@mdx-js/loader',
            /** @type {import('@mdx-js/loader').Options} */
            options: {}
          }
        ]
      },
      // treat normal css as normal css
      ...cssRules,
      ...scssRules,
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        // More information here https://webpack.js.org/guides/asset-modules/
        type: "asset",
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    // allowedHosts: ['.codesandbox.io'],
    // client: {
    //   reconnect: 5,
    //   webSocketURL: 'auto://0.0.0.0:0/ws',
    // },
    // static: {
    //   directory: './dist', // match output.path
    // },
    historyApiFallback: true,
    host: '0.0.0.0',
    // port: 8080, // default
  },
  plugins: [
    new HtmlWebPackPlugin(),
    // new HtmlWebPackPlugin({
    //   title: 'SmolaGaming: React Enterprise Starter',
    //   template: './src/index.html',
    //   filename: 'dist/index.html',
    // }),
  ],
};
