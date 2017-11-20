var path = require("path");
var webpack = require('webpack');

module.exports = {
      module:{
        rules:[
          {
             test: /\.css$/,  //载入css
             use: [
               'style-loader',
               'css-loader'
              ]
          },
           {
             test: /\.(png|svg|jpg|gif)$/, //载入图像
             use: [
               'file-loader'
             ]
           },
           {
            test: /\.(woff|woff2|eot|ttf|otf)$/, //加载字体
            use: [
               'file-loader'
             ]
           },
           {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader' //在webpack的module部分的loaders里进行配置即可      
           }
        ]
      }
  };



