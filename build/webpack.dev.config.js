const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',

    entry: {
        app:[
            "@babel/polyfill",
            path.join(__dirname, '../src/index.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    mode:'development',

    output: {
        publicPath:'/',
        path: path.join(__dirname, '../dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },

    devServer: {
        compress: true,
        host: '0.0.0.0', // 允许ip访问
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                pathRewrite: {'^/api' : ''},
                changeOrigin:true
            }
        },
        hot:true, // 热更新
        historyApiFallback:true, // 解决启动后刷新404
        port: 8000
    },

    /*cacheDirectory是用来缓存编译结果，下次编译加速*/
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, '../src')
        },{
            test: /\.css$/,
            use: ["style-loader", {
                loader:'css-loader',
                options: {
                    modules: true,
                    localIdentName: '[local]--[hash:base64:5]'
                }
            }, 'postcss-loader']
         },{
             test: /\.(png|jpg|gif)$/,
             use: [{
                 loader: 'url-loader',
                 options: {
                     limit: 8192
                 }
             }]
         }]
    },

    resolve: {
        alias: {
            pages: path.join(__dirname, '../src/pages'),
            components: path.join(__dirname, '../src/components'),
            router: path.join(__dirname, '../src/router'),
            images: path.join(__dirname, '../src/images'),
            actions: path.join(__dirname, '../src/redux/actions'),
            reducers: path.join(__dirname, '../src/redux/reducers')
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '../public/index.html')
        }),
    ]
};