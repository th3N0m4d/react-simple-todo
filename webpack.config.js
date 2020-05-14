const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const APP_DIR = path.join(__dirname, 'src')

const plugins = [
  new HtmlWebPackPlugin({
    template: `${APP_DIR}/index.html`
  }),
  new CleanWebpackPlugin()
]

const resolve = {
  extensions: ['.jsx', '.js', '.ts', '.tsx'],
  alias: {
    '@': APP_DIR
  }
}

const devServer = {
  open: true
}

const config = {
  resolve,
  plugins,
  devServer,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|svg)$/,
        use: 'file-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader'
      }
    ]
  }
}

module.exports = config
