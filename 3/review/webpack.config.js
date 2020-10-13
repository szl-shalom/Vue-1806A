const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
module.exports = {
    mode: "development",

    // 1 、配置 入口文件  src/main.js
    entry: {
        main: "./src/main.js",
        index: "./src/index.js"
    },

    // 2、配置出口  出路路径 build  打包文件  是原名字
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].js"
    },

    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ]
    },

    // 3、使用插件 生成html模板 指定 src/index.html  
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        }),
        new CleanWebpackPlugin(),


    ],

    // 4、配置loader
    module: {
        rules: [{
            // 4 - 1  打包图片
            test: /\.(png|gif|jpe?g|webp)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: "[name].[ext]",
                    outputPath: "images"
                }
            }]
        }, {
            // 4 - 3  打包icon
            test: /\.(woff2?|ttf|svg|eot)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: "[name].[ext]",
                    outputPath: "fonts"
                }
            }]
        }, {
            // 4 - 2  打包scss | css  
            test: /\.(scss|css)$/,
            use: [{
                loader: MiniCssExtractPlugin.loader // 将 JS 字符串生成为 style 节点
            }, {
                loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
            }, {
                loader: "sass-loader" // 将 Sass 编译成 CSS
            }]
        }, {
            // 4 - 4  打包js
            test: /\.js$/i,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }, {
            // 4 - 5  处理html文件里面的图片
            test: /\.html$/i,
            loader: 'html-loader'
        }]
    },

    // 5、起服务
    // 要求 配置热更新   任意ip 打开   在浏览器打开
    // 配置接口    /api/getData
    devServer: {
        // host: "0.0.0.0",
        hot: true,
        open: true,
        port: 3000,
        before(app) {
            app.get("/api/getData", (req, res) => {
                res.json([1, 2, 3, 4, 5])
            })
        }
    },
    // 配置别名  方便引入模块
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    }
}