const HtmlWebapckPlugin = require("html-webpack-plugin");
const {
    resolve
} = require("path");
module.exports = {
    mode: "development",
    // 1.指定src/main.js  入口文件
    entry: "./src/main.js",
    // 2.生成的目录 build  文件名称app.js
    output: {
        filename: "app.js",
        path: resolve(__dirname, "build")
    },
    // 3.生成html模板文件  并指定src/index.html文件为模板文件
    plugins: [
        new HtmlWebapckPlugin({
            template: "src/index.html",
        }),
    ],
    // 4、loader 处理规则
    module: {
        rules: [{
            test: /\.(jpe?g|gif|png|webp)$/i,
            use: {
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "images"
                }
            }
        }, {

            test: /\.(woff2?|ttf|svg|eot)$/i,
            use: {
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "fonts"
                }
            }

        }, {
            test: /\.html$/i,
            loader: "html-loader",
        }, {
            test: /\.(sc|c|sa)ss$/,
            loader: ["style-loader", "css-loader", "sass-loader"]
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
            }
        }]
    }
}