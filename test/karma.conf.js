module.exports = config => {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    reporters: ['spec'],
    files: ['../test/**/*.spec.js'],
    preprocessors: {
      '../test/**/*.spec.js': ['webpack'],
    },
    webpackMiddleware: {
      noInfo: true,
    },
    webpack: {
      entry: './src/index.js',
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
        ],
      },
    },
  });
};
