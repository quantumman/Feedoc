const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './web/static/js/app.js',
  ],
  output: {
    path: './priv/static/js',
    filename: 'app.js',
  },
  resolve: {
    root: [path.join(__dirname, 'bower_components')],
    modulesDirectories: ['node_modules', 'bower_components', __dirname + '/web/static/js'],
    extensions: ['', '.js', '.jsx'],
    alias: {
      phoenix_html: __dirname + '/deps/phoenix_html/web/static/js/phoenix_html.js',
      phoenix: __dirname + '/deps/phoenix/web/static/js/phoenix.js',
    },
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    ),
    new ExtractTextPlugin('styles.css', {
      allChunks: true,
    }),
    new webpack.ProvidePlugin({
      m: 'mithril',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  devServer: {
    proxy: {
      '/api/*': {
        target: 'http://localhost:3000/',
        secure: false,
      },
      '/assets/*': {
        target: 'http://localhost:3000/',
        secure: false,
      },
    },
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        exclude: /(node_modules|bower_components)/,
      },
    ],
    loaders: [
      // ES6 transpiler
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
      },
      // SASS/CSS compiler
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
      },
      // Static files
      {
        test: /\.html$/,
        loader: 'static',
      },
      // Image files
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url?limit=8192',
      },
      // Font files
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml',
      },
    ],
  },
};
