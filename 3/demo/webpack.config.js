const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 抽离css插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const Mock = require("mockjs");
const {
    allowedNodeEnvironmentFlags
} = require('process');
module.exports = {
    // 模式
    mode: "development",
    // 入口
    entry: './src/main.js',
    // 出口
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
        new CleanWebpackPlugin(),
        // 抽离css
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        })
    ],
    // 开发服务器
    devServer: {
        port: 3000,
        hot: true,
        open: true,
        before(app) {
            app.get("/api/urls", (req, res) => {
                res.json(Mock.mock({
                    "urls|2-5": ["@image(375x200,@color)"]
                }))
            })
        }
    },
    // loader
    module: {
        rules: [{
            // 处理图片
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: "[name].[ext]",
                    outputPath: "images",
                }
            }]
        }, {
            // 处理html
            test: /\.html$/i,
            loader: 'html-loader',
        }, {
            // 处理scss
            test: /\.(scss|css)$/,
            use: [{
                loader: MiniCssExtractPlugin.loader //将 抽离出来的css 转化值 css文件
            }, {
                loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
            }, {
                loader: "sass-loader" // 将 Sass 编译成 CSS
            }]
        }, {
            test: /\.(svg|woff2?|eot|ttf)/,
            use: {
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "fonts"
                }
            }
        }]
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    },
    // 
    devtool:"source-map"

};