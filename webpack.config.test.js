var webpack = require('webpack');
var path = require('path');

var config = {
  devtool: 'inline-source-map',
  resolve: {
    alias: {
        'sinon': 'sinon/pkg/sinon'
    },
    root: [
      path.resolve(__dirname, './src/app')
    ],
    extensions: ['', '.js', '.json', '.jsx']
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
    'react/addons': true
  },
  node: {
    fs: "empty"
  },
  module: {
    noParse: [
        /node_modules\/sinon\//,
    ],
    preLoaders: [
     {
       test: /\.jsx?$/,
       exclude: [
         /node_modules/,
         /test/
       ],
       loader: 'isparta-instrumenter-loader'
     },
   ],
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.jsx?$/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('test')
    })
  ]
};

module.exports = config;
