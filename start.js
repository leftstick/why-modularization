'use strict';

var webpack = require('webpack');

var WebpackDevServer = require('webpack-dev-server');
var config = Object.create(require('./webpack.config'));
config.devtool = 'sourcemap';
config.debug = true;

new WebpackDevServer(webpack(config), {historyApiFallback: true}).listen(8080, 'localhost', function(err) {
    if (err) {
        console.log('Server starts error');
        process.exit(1);
    }
    // Server listening
    console.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');

});
