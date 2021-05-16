const Dotenv = require('dotenv-webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');
const packageJson = require('../../package.json');
const appConfig = require('../app.config');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/consumer/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: appConfig.name,
      filename: 'remoteEntry.js',
      exposes: appConfig.exposes,
      shared: packageJson.dependencies,
    }),
    new Dotenv({
      path: path.join(__dirname, '../../.dev.env'),
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
