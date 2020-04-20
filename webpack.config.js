const path = require("path");
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');


module.exports = {
  context: __dirname,
  entry: {
      app: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './apps/frontend/index.js',
   ],
    vendors: ['react', 'react-dom', 'axios', 'lodash', 'react-router', 'redux', 'react-redux', 'react-router-redux', 'redux-thunk']
  },

  output: {
      path: path.join(__dirname, './static'),
      filename: '[name]-[hash].js',
      publicPath: 'http://localhost:3000/static/', // Tell django to use this URL to load packages and not use STATIC_URL + bundle_name
  },

  devtool : 'source-map',
  module: {
    rules: [
      // we pass the output from babel loader to react-hot loader
        { test: /\.jsx?$/, exclude: /node_modules/, loader: ['babel-loader']},
        {test: /\.css$/i, include: /node_modules/, loader: ['style-loader', 'css-loader']},
        {test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'}

    ],
  },

  resolve: {
    modules: ['node_modules', 'bower_components'],
    extensions: ['.js', '.jsx', '.css']
  },
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, './apps/frontend/static'),
    publicPath: `/static/`,
    writeToDisk: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    },
    disableHostCheck: true,
  },

   plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(), // don't reload if there is an error
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

}