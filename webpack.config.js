var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
  entry: APP_DIR + '/javascript/index.jsx',
  output: {
    path: BUILD_DIR+'/javascript/',
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      },
      { 
      	test: /vendor\/.+\.(jsx|js)$/,
	    loader: 'imports?jQuery=jquery,$=jquery,this=>window'
	  },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css','sass'])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("../stylesheet/style.css")
  ]
};

module.exports = config;