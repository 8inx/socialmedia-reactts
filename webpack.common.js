const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {

  entry:{
    app: './src/index.tsx'
  },


  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './static/index.html',
      favicon: './static/favicon.ico'
    })
  ],

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.svg$/,
        use: [{
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false
              }
            }
          }
        }]
      },
      {
        test: /\.(png|jpe?g)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: "assets/image/[name].[ext][query]"
          },
        }
      },
    ]
  },
  
  resolve: {
    extensions: ['','.js', '.jsx', '.ts', '.tsx'],
    modules: [ path.resolve(__dirname, "src"), "node_modules"]
  },
}