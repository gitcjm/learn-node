/**
 * Created by cjm on 4/7/17.
 */

var gulp = require('gulp');
var minify = require('gulp-minify');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var gzip = require('gulp-gzip');

gulp.task('mytask', function () {
    // console.log('我的第一个默认任务');
    
    gulp.src(['*.js', '!gulpfile.js'])
        .pipe(gulp.dest('./build/js'));

    gulp.src('*.css')
        .pipe(gulp.dest('./build/css'));

    // 使用uglify()后，只产生一个压缩文件
    gulp.src('build.js')
        .pipe(uglify())
        .pipe(gulp.dest('./js'));

    // 使用minify()后，产生两个文件，原文件和源文件-min版
    gulp.src('cjm.js')
        .pipe(minify())
        .pipe(gulp.dest('./js'));

    // 使用concat将所有文件合并
    gulp.src(['*.js', '!gulpfile.js', '!build.js'])
        .pipe(concat('all.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('./dest'));

    //
    gulp.src(['*.js', '!gulpfile.js', '!build.js'])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gzip())
        .pipe(gulp.dest('./dest'));


});


