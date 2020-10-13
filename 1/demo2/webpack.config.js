// 引入node核心模块path
const path = require("path");
// 引入插件 用处 ：打包指定的html页面  
const HtmlWebapckPlugin = require("html-webpack-plugin");
//抛出配置对象
module.exports = {
    // 模式 
    // development 开发模式
    // production 生产模式
    mode: "development",
    //  入口文件
    entry: "./src/main.js",
    // 出口文件
    output: {
        // 文件名称
        filename: "app.js",
        // 文件路径
        path: path.resolve(__dirname, "build")
    },
    // 模块
    /**
     *  @param { Object } module 模块匹配
     *  @param { Array } rules 匹配的d数组 数组里面套对象 每一个对象都是处理的loader
     */
    module: {
        // 规则
        rules: [{
            /**
             * @param { RegExp } test 匹配的文件
             * @param { Object } use  匹配的对象
             * @param { String || Array } 匹配的loader 
             * loader 处理图片 使用 file-loader 或者 url-loader
             *        处理html 使用 html-loader 
             *              注意：html-loader本身只可以识别html里面的图片，并不能够打包图片
             *                    需要配置其他loader 去打包图片
             */
            test: /\.(jpe?g|png|gif|webp)$/,
            use: {
                loader: "url-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "images/",
                    limit: 4000000
                }
            }
        }, {
            test: /\.html$/i,
            loader: 'html-loader',
        }, ]
    },
    /**
     *  @desc 打包html页面
     *  1.下载  npm i html-webpack-plugin
     *  2.引入  const HtmlWebpackPlugin = require("html-webpack-plugin");
     *  3.在plugins 当中 new HtmlWebpackPlugin(配置对象)
     */
    plugins: [
        new HtmlWebapckPlugin({
            template: "./src/index.html"
        })
    ]
}