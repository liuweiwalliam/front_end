/**
 * Created by walliam on 2017/7/7.
 */
var path = require("path");//path.resolve();解析当前地址的函数
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {'main': './src/components/app.js'}, //入口文件
    output: {
        path: path.resolve(__dirname, './dist/js'),//打包后的输出文件夹
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,//匹配的文件规则
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, 'node_modules'),//不包含某些地址(只能写绝对路径)
                include: path.resolve(__dirname, '.src'),//'地址信息可为数组',//只包含某些地址
                query: {presets: ['es2015']},//处理的参数
            },
            {
                test: /\.css$/,//匹配的文件规则
                use: ['style-loader',
                    {loader: 'css-loader', options: {importLoaders: 1}},//对loader指定参数的方法
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => [
                                require('postcss-import')({root: loader.resourcePath}),
                                // require('postcss-cssnext')(),
                                require('autoprefixer')({broswers: ['last 5 versions']}),
                                require('cssnano')()
                            ]
                        }
                    }]
                // exclude:path.resolve(__dirname,'node_modules'),//不包含某些地址(只能写绝对路径)
                // include:path.resolve(__dirname,'.src'),//'地址信息可为数组',//只包含某些地址
                // query:{presets:['es2015']},//处理的参数
            },
            {
                test: /\.scss$/,//匹配的文件规则
                use: ['style-loader',
                    {loader: 'css-loader', options: {importLoaders: 1}},//对loader指定参数的方法
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => [
                                require('postcss-import')({root: loader.resourcePath}),
                                // require('postcss-cssnext')(),
                                require('autoprefixer')({broswers: ['last 5 versions']}),
                                require('cssnano')()
                            ]
                        }
                    },
                    'sass-loader']
            },
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'page/index.html',
            inject: 'head',//body/false
            // publicPath: 'http://cdn.com/',//指定js的请求路径
            // minify:{},//是进行压缩
            title: path.resolve(__dirname),
            // date: new Date(),
            // chunks:['page1','page2'], //只引入需要的chunk模块
            // exludeChunks:['page1']//除了。。都引入
            // path:path.resolve
        }),
    ]
};