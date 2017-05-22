/**
 * Created by cjm on 5/22/17.
 */

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var gulp_webpack = require('gulp-webpack');
var webpack_config = require('./webpack.config.js');
var webpack = require('webpack');

gulp.task('cjmtask', function () {
    gulp.src(['entry.js'])
        .pipe(gulp_webpack(webpack_config, webpack))
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'));
});