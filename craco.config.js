const { loaderByName, getLoader } = require('@craco/craco');
const cracoBabelLoader = require('./cracoBabelLoader');
const path = require('path');

module.exports = {
  webpack: {
    configure: webpackConfig => {
      const { match, isFound } = getLoader(
        webpackConfig,
        loaderByName('babel-loader')
      );
      if (isFound) {
        webpackConfig.module.rules.push(cracoBabelLoader(match.loader));
      }
      return webpackConfig;
    }
  },
  plugins: [
    {
      plugin: require('craco-antd'),
      options: {
        customizeThemeLessPath: path.join(__dirname, 'src/styles/theme.less'),
        lessLoaderOptions: {
          noIeCompat: true
        }
      }
    }
  ]
};
