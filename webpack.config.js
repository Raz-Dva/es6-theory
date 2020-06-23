var webpack = require('webpack'),
    path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');

//settings for webpack
module.export = {

    //entry file 
    entry: './index.js',
    //output file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'boundel.js'
    },
    //plugins
    plugin: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: './dist/index.html' //relative to root of the application
        })
    ],
    watch: true,
    //es6 loader install https://github.com/babel/babel-loader
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
}