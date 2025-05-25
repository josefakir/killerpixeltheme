// webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => ({
  entry: {
    bundle: './src/js/index.js'
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  },
  mode: argv.mode || 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('@tailwindcss/postcss'),
                  require('autoprefixer'),
                ]
              }
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ],
  devtool: argv.mode === 'development' ? 'source-map' : false,
});
