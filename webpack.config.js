process.env.NODE_ENV = 'production';

const path = require('path');
const glob = require('glob');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpackConfigRules = require('./webpack.config.rules');
const CopyPlugin = require('copy-webpack-plugin');

const publicPath = '/jnps-checkin/';
const buildVersion = new Date().getTime();

const webpackConfig = Object.assign({}, webpackConfigRules, {
  mode: 'production',
  cache: true,
  target: 'web',
  devtool: false, // source map should not be used in production
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    chunkFilename: `[name].bundle.js?_=${buildVersion}`,
    filename: `[name].bundle.js?_=${buildVersion}`,
    pathinfo: false, // Defaults to false and should not be used in production
    publicPath: publicPath,
    clean: {},
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        // sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public/404.html', to: 'dist/404.html' }],
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        BUILD_VERSION: JSON.stringify(buildVersion),
        PUBLIC_PATH: JSON.stringify(publicPath),
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`, { nodir: true }),
    }),
    new HtmlWebpackPlugin({
      chunks: ['app'],
      filename: path.resolve(__dirname, 'dist/index.html'),
      template: path.resolve(__dirname, 'public/index.html'),
      chunksSortMode: 'auto', // Sort chunks by dependency
      // minify: {
      //   collapseWhitespace: true,
      //   removeComments: true,
      //   removeRedundantAttributes: true,
      //   removeScriptTypeAttributes: true,
      //   removeStyleLinkTypeAttributes: true,
      //   useShortDoctype: true,
      // },
    }),
    new ESLintPlugin({
      quiet: true,
    }),
  ],
  node: false,
  resolve: {
    modules: [path.resolve(__dirname), 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
      publicPath: publicPath,
      watch: {
        ignored: /node_modules/,
      },
    },
    historyApiFallback: {
      rewrites: [{ from: /^\/jnps-checkin\/.*$/, to: '/jnps-checkin/index.html' }],
    },
    host: process.env.WEBPACK_DEV_SERVER_HOST,
    allowedHosts: 'all',
  },
  performance: {
    hints: false, // DISABLE WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
  },
});

module.exports = webpackConfig;
