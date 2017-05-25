/**
 * Created by cjm on 5/22/17.
 */

// gulp-webpack 学习, 重点是 webpack 的配置文件

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

// gulp-template 学习

var gulp_tpl = require('gulp-template');
var concat = require('gulp-concat');
var paths = {
    htmls: ['src/header.html','src/index_tpl.html', 'src/footer.html']
};
gulp.task('onepage', function () {
    gulp.src(paths.htmls)
        .pipe(concat('onepage.html'))
        .pipe(gulp_tpl({
            'age': 18
        }))
        .pipe(gulp.dest('./build/html'));
});

// gulp-template 获取动态数据

gulp.task('news', function(){

    var _clib2 = require('cjmlib2');
    var rename = require('gulp-rename');

    _clib2.loadNews(function(body) {
        var news = JSON.parse(body);
        gulp.src(['src/news_tpl.html'])
            .pipe(gulp_tpl(news))
            .pipe(rename(news.id + '.html'))
            .pipe(gulp.dest('./build/html'));
    });
});