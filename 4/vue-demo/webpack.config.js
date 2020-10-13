const HtmlWebapckPlgugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index1.js",
    plugins: [
        new HtmlWebapckPlgugin({
            template: "src/index1.html"
        })
    ],
    devServer: {

    }
}