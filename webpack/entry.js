/**
 * Created by cjm on 5/22/17.
 */

// var getlib = require("cjmlib");

// alert(getlib.age);

// 我的试验,这个试验和目前学习内容无关
// var request = require('request');
// var fs = require('fs');
// request('http://localhost:8090/fornode/news.php')
//     .pipe(fs.createWriteStream('news.json'));

// request 试验成功. 刚开始失败,是因为我的httpd服务就没有打开
// var request = require('request');
// request('http://localhost:8090/fornode/news.php',
//     function (error, response, body) {
//         console.log(body);
//         console.log(response);   // response是一个很复杂的对象,慢慢熟悉它
//         console.log(error);
//     }
// );

// request 通常以以下模式使用
// var request = require('request');
// request.get('http://localhost:8090/fornode/news.php',
//     function(error, response, body){
//         if (!error && response.statusCode == 200) {
//             console.log(body);
//         }
//     });

// request.get 部分在 cjmlib2 库中
// var _clib2 = require('cjmlib2');
//
// var loadbody = function(body) {
//     console.log(body);
// }
//
// _clib2.loadNews(loadbody);

// EJS 试验
var fs = require('fs');

var str = fs.readFileSync('src/ejs.html', 'utf8');
// console.log(str);

var ejs = require('ejs');

var data = {
    title: '夏天来了',
    content: '夏天来了,吃西瓜吧.',

    list: [
        {name: 'shenyi'},
        {name: 'cjm'},
        {name: '张三'}
    ]
};

var html = ejs.render(str, data);
console.log(html);

// fs.readFile('./src/news_tpl.html', 'utf8', function(err, data) {
//     if (err) throw err;
//     console.log(data);
// });





