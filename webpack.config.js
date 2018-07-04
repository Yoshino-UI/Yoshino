const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['ts', '.tsx', '.js']
  },
  entry: path.resolve('./docs/entry.tsx'),
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
    chunkFilename: '[name].[chunkhash:5].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        use: ['ts-loader'],
        include: [path.resolve('components'), path.resolve('docs')],
        exclude: [/__tests__/],
      },
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
        include: [
          path.resolve('components'),
          path.resolve('scripts'),
          path.resolve('docs'),
          path.resolve('node_modules/prismjs/themes/'),
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        use: ['url-loader'],
      },
      {
        test: /\.md$/,
        use: ['raw-loader'],
      },
    ]
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./docs/index.html'),
      favicon: path.resolve('./docs/favicon.ico'),
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "build"),
    compress: false,
    port: 9000,
  },
};
