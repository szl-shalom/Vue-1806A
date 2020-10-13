const {
    resolve
} = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Mock = require("mockjs");
module.exports = {
    mode: "production",
    entry: {
        main: "./src/main.js",
        app: "./src/app.js",
    },
    output: {
        filename: "[name].js",
        path: resolve(__dirname, "build")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [{
            test: /\.(jpe?g|png|gif|webp)$/,
            use: [{
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "images"
                }
            }]
        }, {
            test: /\.html$/i,
            loader: "html-loader"
        }, {
            test: /\.(scss|sass|css)$/i,
            loader: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        }, {
            test: /\.(ttf|eot|woff2?|svg)/,
            use: [{
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "fonts"
                }
            }]
        }, {
            // npm i babel-loader @babel/core @babel/preset-env
            // test: /\.js$/i,
            // exclude: /node_modules/,
            // loader: "babel-loader",
        }]
    },
    devServer: {
        // host: "0.0.0.0"
        // port: "3000",
        open: true,
        // hot: true,
        before(app) {
            app.get("/api/list", (req, res) => {
                res.json(Mock.mock({
                    "list|3-5": [{
                        title: "@ctitle",
                        "children|5-10": [{
                            name: "@cname"
                        }]
                    }]
                }))
            })
        }
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "src")
        }
    },
    devtool: "source-map"
}