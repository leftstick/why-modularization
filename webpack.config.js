'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        index: './js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build', 'js'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js',
        publicPath: 'js/'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css!autoprefixer?browsers=last 5 version!'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)\w*/,
                loader: 'file?name=[path][name].[ext]'
            },
            {
                test: /\.html$/,
                loader: 'raw'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.bundle.js')
    ]
};
