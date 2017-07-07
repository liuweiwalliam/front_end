/**
 * Created by walliam on 2017/7/7.
 */
var path = require("path");
module.exports={
    entry:'./main.js', //入口文件
    output:{
        path:path.resolve(__dirname, './dist'),//打包后的输出文件夹
        filename:'bundle.js'
    }
};