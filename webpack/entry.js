/**
 * Created by cjm on 5/22/17.
 */

var getlib = require("cjmlib");

// alert(getlib.age);

// console.log(test);

var request = require('request');
var fs = require('fs');

// 我的试验
// request('http://localhost:8090/fornode/news.php')
//     .pipe(fs.createWriteStream('news.json'));

// 下面这句试验失败
// request.get('http://localhost:8090/fornode/news.php')
//     .pipe(request.put('http://localhost:8090/news.php'));

// request.get('http://localhost:8090/fornode/news.php',
//     function(error, response, body){
//         if (!error && response.statusCode == 200) {
//             console.log(body);
//         }
//     });

var _clib2 = require('cjmlib2');

var loadbody = function(body) {
    console.log(body);
}

_clib2.loadNews(loadbody);


