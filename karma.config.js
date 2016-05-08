var argv = require('yargs').argv;
var path = require('path');

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    singleRun: !argv.watch,
    frameworks: ['mocha', 'chai'],
    reporters: ['spec'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './test/test.bundle.js'
    ],
    // tell karma all the plugins we're going to be using to prevent warnings
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-webpack',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-sourcemap-loader'
    ],
    preprocessors: {
      ['./test/test.bundle.js']: ['webpack', 'sourcemap']
    },
    webpack: {
      devtool: 'inline-source-map',
      externals: {
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        'react/addons': true
      },
      resolve: {
        alias: {
            'sinon': 'sinon/pkg/sinon'
        },
        root: [
          // allows us to import modules as if /src was the root.
          // so I can do: import Comment from 'components/Comment'
          // instead of:  import Comment from '../components/Comment' or whatever relative path would be
          path.resolve(__dirname, './src/app')
        ],
        // allows you to require without the .js at end of filenames
        // import Component from 'component' vs. import Component from 'component.js'
        extensions: ['', '.js', '.json', '.jsx']
      },
      module: {
        noParse: [
            /node_modules\/sinon\//,
        ],
        loaders: [
          {
            exclude: /node_modules/,
            loader: 'babel-loader',
            test: /\.jsx?$/
          }
        ],
      }
    },
    webpackMiddleware: {
      noInfo: true,
    }
  });
}
