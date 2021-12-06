const path = require('path');

module.exports = {
  loader: 'sass-loader',
  options: {
    sassOptions: {
      includePaths: [path.resolve(__dirname, '../../src')],
    },
  },
};
