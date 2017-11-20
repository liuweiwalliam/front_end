module.exports = {//注意这里是exports不是export
    entry:"./webpack/main.jsx",
    output: {
        path: __dirname + "/webpack/build/",//打包后的js文件存放的地方
        filename: "bundle.js"//打包后的js文件名
    },
    module: {
        loaders:[
            // {
            //     test: /\.js[x]?$/,
            //     exclude: /node_modules/,
            //     loader: 'babel-loader?presets[]=es2015&presets[]=react'
            // },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ["es2015", "react"],
                    // plugins:["transform-decorators-legacy",["import",[{'libraryName':'antd'}]],"add-module-exports",'antd']
                }
            },
        ]
    }
};
