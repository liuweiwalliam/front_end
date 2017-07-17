/**
 * Created by walliam on 2017/7/7.
 */
var path = require("path");
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {'page1': './main.js', "page2": './src/main2.js'}, //入口文件
    output: {
        path: path.resolve(__dirname, './dist/'),//打包后的输出文件夹
        filename: 'js/[name].js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: 'head',//body/false
            publicPath: 'http://cdn.com/',//指定js的请求路径
            minify:{},//是进行压缩
            title: 'good',
            date: new Date(),
            // path:path.resolve
        })
    ]
};