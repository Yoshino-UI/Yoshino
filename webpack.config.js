const path = require('path');
const components = require('./scripts/components');

module.exports = {
  entry: components,
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  resolve: {
    extensions: ['ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        use: ['ts-loader'],
        include: path.resolve('components'),
        exclude: [/__tests__/],
      },
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
        include: [path.resolve('components'), path.resolve('scripts')],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        use: ['url-loader'],
      },
    ]
  },
  // devtool: 'source-map'
  devtool: false
};
