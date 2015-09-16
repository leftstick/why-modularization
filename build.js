'use strict';

var path = require('path');
var config = require('./webpack.config');
var webpack = require('webpack');
var gulp = require('gulp');

require('rimraf').sync('build/');

gulp.src(['index.html', 'mock/*'], {'base': '.'})
    .pipe(gulp.dest('build/'));

webpack(config, function(err, stats) {
    if (err) {
        throw new gutil.PluginError('webpack', err);
    }
    console.log('[webpack]', stats.toString());
});
