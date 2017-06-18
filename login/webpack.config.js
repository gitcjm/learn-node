/**
 * Created by cjm on 6/1/17.
 */

var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlusPlugin = require('extract-text-plus-webpack-plugin');

module.exports = {
    entry: {
        main: ['./src/js/main.js'],
        user: ['./src/js/login.js', './src/js/register.js'],
        index: ['./src/js/index.js'],
        jq_plugins: ['./src/lib/jquery.validate.min.js', './src/lib/jquery.formInputLetter.js']
    },
    output: {
        path: __dirname + '/build/js',
        filename: '[name].js'
    },
    // 排除打包的库, 字符串, 数组, 对象, 正则表达式均可
    externals: {
        'jquery':'$',
        // 或者 'jquery':'jQuery'
    },
    //externals: /^(jquery|\$)$/i,
    module: {
        loaders: [
            //{test: /\.css$/, loaders: ['style-loader', 'css-loader']},
            {test: /\.css$/, loader: ExtractTextPlusPlugin.extract('style-loader', 'css-loader')}
        ]
    },
    plugins: [
        // 生成一个html文件,并把脚本引用自动注入html页面
        new HtmlWebpackPlugin({
            filename: __dirname + '/build/html/login.html',
            template: __dirname + '/src/tpl/login.html',
            inject: 'body',
            hash: true,
            chunks: ['main', 'user', 'commons', 'jq_plugins']
            // 因为jq_plugins从user中已经抽离出来，所以这儿要将其添加到chunks中
        }),
        new HtmlWebpackPlugin({
            filename: __dirname + '/build/html/index.html',
            template: __dirname + '/src/tpl/index.html',
            inject: 'body',
            hash: true,
            chunks: ['main', 'index', 'commons']
        }),
        // 通过$全局引用jquery, 因为使用了外部引用, 这儿就没用了
        /*new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),*/
        // 把业务模块分开打包
        /*new webpack.optimize.CommonsChunkPlugin({
            name: 'user',
            filename: 'user.js'
        }),*/
        // 分离公共JS资源
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            //filename: 'commons.js', // 可以忽略,因为output中已有[name]占位符
            chunks: ['main', 'user', 'index']
        }),
        // 将第三方插件单独打包
        new webpack.optimize.CommonsChunkPlugin({
            name: 'jq_plugins',     // chunk 名称
            filename: 'jqp.js'      // 单独打包的文件
        }),
        // 把样式单文件抽离出来
        new ExtractTextPlusPlugin('[name].css')
    ]
}