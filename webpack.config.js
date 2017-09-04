const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: './app/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/app')  
  },
  devServer: {
    inline: true,
    contentBase: './app',
    port:  process.env.PORT || 8000
  },
  module: {
   loaders: [
           {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings 
            }, {
                loader: "css-loader" // translates CSS into CommonJS 
            }, {
                loader: "sass-loader" // compiles Sass to CSS 
            }]
        },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin('styles.css')
    ]
  }
