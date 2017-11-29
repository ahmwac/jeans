const path = require('path');
const webpack = require('webpack')

module.exports = {
  entry: './src/application.js',
  output: {
    path: path.resolve(__dirname, 'public', 'js'),
    filename: 'build.js',
  },
  plugins: [
    new webpack.ProvidePlugin({$: "jquery",jQuery: "jquery"}),
    new webpack.optimize.UglifyJsPlugin()
  ]
};