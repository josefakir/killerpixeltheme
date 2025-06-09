/* eslint-env node */
const path = require('path');
const fs   = require('fs');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin   = require('css-minimizer-webpack-plugin');
const TerserPlugin         = require('terser-webpack-plugin');
const HtmlWebpackPlugin    = require('html-webpack-plugin');

/**
 * Entradas: src/<componente>/js/*.js   →   bundle "<componente>"
 */
function buildEntries() {
  const entries = {};
  entries.global = ['./src/global/scss/global.scss'];   

  glob.sync('src/*/js/*.js').forEach(jsPath => {
    const [comp] = path.relative('src', jsPath).split(path.sep);   // 'header'

    const scssPath = jsPath
      .replace(`${path.sep}js${path.sep}`, `${path.sep}scss${path.sep}`)
      .replace(/\.js$/, '.scss');

    const jsEntry   = './' + jsPath;
    const scssEntry = './' + scssPath;

    entries[comp] = fs.existsSync(scssPath)
      ? [jsEntry, scssEntry]
      : [jsEntry];
  });

  return entries;
}
module.exports = (env, argv) => ({
  entry: buildEntries(),

  output: {
    filename: '[name].js',                   
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },

  resolve: {
    alias: {
        '@': path.resolve(__dirname, 'src')  
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } }
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
                sassOptions: {
                    includePaths: [path.resolve(__dirname, 'src/styles')]
                }
            }
        }
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body',
        chunks: 'all'
    })
  ],

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({ extractComments: false }),
      new CssMinimizerPlugin()
    ]
  },

  devtool: argv.mode === 'development' ? 'source-map' : false,
  stats  : 'minimal',
  mode   : argv.mode ?? 'production',

  devServer: {
    static: { directory: path.resolve(__dirname, 'dist') },
    open: true,           // abre el navegador
    port: 8080,
    hot: true,
    watchFiles: ['src/**/*']   // recarga si cambian HTML/SCSS/JS
  }
});
