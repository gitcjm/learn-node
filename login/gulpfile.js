/**
 * Created by cjm on 6/1/17.
 */

var gulp = require('gulp');
var gulp_webpack = require('gulp-webpack');
var webpack_config = require('./webpack.config.js');
var webpack = require('webpack');

// 使用gulp-webpack插件进行编译
gulp.task('build-js', function () {
    gulp_webpack(webpack_config, webpack)
        .pipe(gulp.dest('./build/js'));
});

gulp.task('run', ['build-js'], function() {
    gulp.src(['./src/tpl/login.html'])
        .pipe(gulp.dest('./build/html'));
});

// 直接使用webpack进行编译, 这两种方式都可以,但是直接在命令行下编译就出错了
gulp.task('wp', function () {
    webpack(webpack_config, function(){
        // 将来写一些gulp代码
    })
});