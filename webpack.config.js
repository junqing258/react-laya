const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    app: path.resolve(__dirname, 'src/main.tsx')
  },
  devtool: 'source-map',
  output: {
    pathinfo: false,
    path: path.resolve(__dirname, './bin'),
    filename: 'js/[name].bundle.js'
  },
  watch: process.env.NODE_ENV !== "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: 'bin/index.html'
    }),
    // new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src')
      }, {
        test: /\.(png|jpg|jpeg|gif)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: './assets/[name].[hash:6].[ext]'
          }
        }]
      }
    ]
  },
  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: 3000,
    contentBase: "./bin/"
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ],
    extensions: ['.js', '.ts', '.tsx', '.jsx'],
    alias: {

    }
  }
};