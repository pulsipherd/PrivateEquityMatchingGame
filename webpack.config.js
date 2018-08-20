var webpack = require('webpack');
var path = require('path');

module.exports = {
  cache: true,
  debug: true,
  devtool: 'source-map',
  context: path.join(_dirname, 'src'),
  entry: [
    'webpack-dev-server.clinte?http://localhost:4000',
    'webpack/hot/only-dev-server',
    './index'
  ],
  output: {
    path: _dirname + '/dist',
    filename: 'matching.js'
  },
  resolve: {
    extensions: ['', '.js', '.scss'],
    modulesDirectories: ['node_modules', 'src'],
    fallback: _dirname
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};