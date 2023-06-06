const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

require('dotenv').config({ path: './.env' });

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  const settings = {
    entry: './src/index.tsx',
    target: 'web',
    devtool: 'source-map',
    output: {
      filename: '[name].[contenthash].bundle.js',
      path: path.resolve(__dirname, 'build'),
      clean: true,
    },
    devServer: {
      port: 3000,
      hot: true,
      open: true,
      historyApiFallback: true,
      static: {
        directory: path.resolve(__dirname, 'public', 'index.html'),
        serveIndex: true,
        watch: true,
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: 'swc-loader',
          },
          exclude: /node_modules/,
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
          use: ['file-loader'],
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: 'public/index.html',
      }),
      new webpack.ProvidePlugin({
        React: 'react',
      }),
      new MiniCssExtractPlugin({
        filename: isProduction ? 'static/css/[name].[contenthash].css' : '[name].css',
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env),
      }),
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx', '.css'],
      plugins: [new TsconfigPathsPlugin({})],
    },
    optimization: {
      minimizer: [new TerserPlugin()],
    },
  };

  return settings;
};
