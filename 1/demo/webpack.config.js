/**
 * webpack配置文件
 * 文件名称必须是webpack.config.js
 * 抛出一个对象，此对象是配置对象
 */
const { resolve } = require("path");
module.exports = {
    // 配置对象

    /**
     * @desc 出口文件
     * @param { String } entry  路径
     */
    entry: "./src/1.js",
    /**
     *  @desc 出口文件
     *  @param { Object } output   对象
     *  @param { String } filename  生成文件的名称
     *  @param { String } path  生成文件的路径 注意：必须是绝对路径      
     */
    output: {
        filename: "qwe.js",
        path: resolve(__dirname,"build")
    }

}