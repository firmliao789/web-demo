const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
module.exports = {
    mode: "development",
    entry: ['webpack-hot-middleware/client.js', './src/javascript/index'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "web-demo", //用于生成的HTML文档的标题。
            filename: "index.html", // 生成的模板文件的名字 默认index.html
            template: "index.html", //模板来源文件
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}
