/**
 * Created by cjm on 6/1/17.
 */

var gulp = require('gulp');
var gulp_webpack = require('gulp-webpack');
var webpack = require('webpack');

// 使用gulp-webpack插件进行编译
gulp.task('build-modules', function () {
    gulp_webpack(webpack_config, webpack)
        .pipe(gulp.dest('./build/modules'));
});

// 直接使用webpack进行编译, 和使用命令方式一样
// 但是直接在命令行下编译出错了!后来发现,出错原因是项目中安装的webpack版本和系统中的不一致
gulp.task('wp', function () {
    webpack(webpack_config, function(){
        // 将来写一些gulp代码
    })
});

/**
 * 使用gulp自动生成webpack.config.js的entry
 * @2017-7-28
 */

var webpack_config = require('./webpack.config.js');

gulp.task('config', function () {
    var fs = require('fs');
    var root = './src/modules/';
    var config = {};

    var get_dirs = fs.readdirSync(root);
    get_dirs.forEach(function (dir) {
        // dir是模块下的文件夹,也用于入口entry的条目属性名
        var get_files = fs.readdirSync(root + dir);
        var get_entry = get_files.map(function (jsfile) {
            return root + dir + '/' + jsfile;
        });

        config[dir] = get_entry;
    });

    //console.log(config);
    webpack_config.entry = config;
});

gulp.task('run', ['config'], function() {
    // 获取远程的新闻热点头条
    var request = require('request');
    request.get('http://localhost:8090/fornode/hots.php', function (err, response, body) {
        if(!err && response.statusCode == 200) {
            var fs = require('fs');
            fs.writeFileSync('./src/remote/hots.json', body);

            // webpack处理过程
            webpack(webpack_config, function (err, data) {

            });
        }
    })
});
