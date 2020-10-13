const HtmlWebpackPlugin = require("html-webpack-plugin");
const Mock = require("mockjs");

module.exports = {
    mode: "development",
    entry: "./src/main.js",
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.(svg|woff2?|eot|ttf)$/,
            loader: "file-loader"
        }]
    },
    devServer: {
        // 任意ip 可以打开
        // host: "0.0.0.0",
        // 端口号
        port: "3000",
        // 热更新
        hot: true,
        // 启动服务器在浏览器打开
        open: true,
        // 服务器
        before(app) {
            app.get("/api/list", (req, res) => {
                res.send(
                    Mock.mock({
                        "list|10-20": [{
                            "name": "@cname",
                            "age|18-30": 1
                        }]
                    })
                )
            })
        }
    },

}