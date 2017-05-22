/**
 * Created by cjm on 5/22/17.
 */

module.exports = {
    entry: [
        // entry是入口文件, 可以有多个
        './entry.js'
    ],
    output: {
        path: __dirname + '/build/js',
        filename: 'build.js'
    }
}