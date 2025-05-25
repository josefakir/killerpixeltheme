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
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,    // extrae CSS
          'css-loader',                   // interpreta @import y url()
          'sass-loader'                   // compila SCSS → CSS
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),           // limpia dist/ antes de build
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ],
  devtool: argv.mode === 'development' ? 'source-map' : false,
  watchOptions: {
    ignored: /node_modules/
  }
});
