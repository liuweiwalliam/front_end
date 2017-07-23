/**
 * Created by walliam on 2017/7/7.
 */
var path = require("path");
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {'main': './src/components/app.js'}, //入口文件
    output: {
        path: path.resolve(__dirname, './dist/js'),//打包后的输出文件夹
        filename: 'js/[name].js'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                query:{presets:['es2015']},//处理的参数
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: 'head',//body/false
            // publicPath: 'http://cdn.com/',//指定js的请求路径
            // minify:{},//是进行压缩
            // title: 'good',
            // date: new Date(),
            // chunks:['page1','page2'], //只引入需要的chunk模块
            // exludeChunks:['page1']//除了。。都引入
            // path:path.resolve
        }),
    ]
};