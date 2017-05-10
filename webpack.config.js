/**
 * Created by wanghaijiang on 2017/1/18.
 */

let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = {

    entry: './index.js', //入口

    output: {
        publicPath: '/'
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.(css|scss)$/,
                loader: 'style!css?modules&localIdentName=[path][name]-[local]!postcss!sass' //添加对样式表的处理
            },
            {
                test: /\.(gscss)$/,
                loader: 'style!css!postcss!sass' //添加对样式表的处理
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: "url?limit=1"
            }
        ]
    },

    postcss: [
        require('autoprefixer')//调用autoprefixer插件
    ],

    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/index.html"//new 一个这个插件的实例，并传入相关的参数
        })
    ],

    devServer: {
        host: "0.0.0.0",
        colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    }
};

if (process.env.NODE_ENV === 'development') {

    config.devtool= 'source-map';
    // config.devtool = 'cheap-module-eval-source-map';

    config.devServer.port = 3000;

    config.module.loaders.unshift({
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'react-hot'
    });

}
else if (process.env.NODE_ENV === 'production') {

    config.devServer.port = 8080;

    config.plugins.unshift(new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }));

    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }));
    config.plugins.push(new ExtractTextPlugin("[name]-[hash].css"));

}

module.exports = config;