const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  devServer: {
    // The `hot` option is to use the webpack-dev-server in combination with the hot module replacement API.
    // Setting hot: 'only' doesn't reload the browser page when there are errors (build fails) whereas hot: true will.
    hot: 'only',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hot Module Reloading',
      template: './index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
