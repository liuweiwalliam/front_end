/**
 * Created by walliam on 2017/7/7.
 */
var path = require("path");
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    // entry:['./main.js','./src/main2.js'], //入口文件
    entry:{'page1':'./main.js',"page2":'./src/main2.js'}, //入口文件
    output:{
        path:path.resolve(__dirname, './dist'),//打包后的输出文件夹
        filename:'[name]-[hash].js'
    },
    plugins:[
        new htmlWebpackPlugin()
    ]
};