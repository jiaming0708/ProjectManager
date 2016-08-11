var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

module.exports = {
  entry: {
    vendor: './src/vendor.ts',
    app: './src/main.ts',
    style: './scss/main.scss'
  },
  output: {
    path: __dirname,
    filename: './dist/[name].bundle.js'
  },
  resolve: {
    extensions: ['', '.ts', '.js', '.scss', '.css']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.ts/,
        loaders: ['ts-loader'],
        include: ['./src/']
      },{
        test: /\.css$/,
        loader: 'style!css'
      },{
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"./dist/vendor.bundle.js"),
    new ExtractTextPlugin("./dist/[name].css")
  ]
}
