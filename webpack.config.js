const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const modeConfig = env => require(`./build-scripts/webpack.${env.mode}`);

/*output: {
  path: path.join(__dirname, '/lib'),
  filename: './ev-carousel-pro.js',
  library: 'ev-carousel-pro',
  libraryTarget: 'umd',
  umdNamedDefine: true
},
devtool: 'inline-source-map',*/

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  return webpackMerge(
    {
      mode: mode,
      entry: ['./src/index.jsx'],
      output: {
        path: path.join(__dirname, './dist'),
        filename: './bundle.js',
        publicPath: '/'
      },
      devServer: {
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true
      },
      resolve: {
        extensions: ['.js', '.jsx']
      },
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader'
              }
            ]
          },
          { test: /\.js$/, use: 'babel-loader' },
          {
            test: /\.(s*)css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
          }
        ]
      },
      plugins: [new webpack.ProgressPlugin()]
    },
    modeConfig({ mode, presets })
  );
};
