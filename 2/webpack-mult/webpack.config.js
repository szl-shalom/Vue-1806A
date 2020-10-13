const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin  } = require("clean-webpack-plugin");
module.exports = {
    entry: {
        main: "./src/main.js",
        index: "./src/index.js",
    },
    output: {
        filename: "[name].js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            filename: "index.html",
            chunks: ["index"]
        }),

        new HtmlWebpackPlugin({
            template: "src/main.html",
            filename: "main.html",
            chunks: ["main"]
        }),

        new CleanWebpackPlugin()
    ]
}