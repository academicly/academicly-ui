const cracoBabelLoader = require('../cracoBabelLoader');
const path = require('path');
module.exports = async ({ config }) => {
  let loader = config.module.rules[config.module.rules.length - 1];
  config.module.rules.push(cracoBabelLoader(loader));
  config.module.rules.push(
    ...[
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [require.resolve('babel-preset-react-app')]
            }
          },
          require.resolve('react-docgen-typescript-loader')
        ]
      }
    ]
  );
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
