/**
 * Created by cjm on 7/17/16.
 */

var getlib = require('cjmlib');
var getOtherLib = require('./myOtherLib.js');

// 调用getlib对象中的方法
//getlib.showName();

// 输出getlib对象(全部属性及其值)
console.log(getlib);

// 输出getlib对象所有属性的"值"
for(var obj in getlib){
    console.log(getlib[obj]);
}

/* 生成编译文件build.js */

var file = require('fs');
file.writeFile('build.js', '');

// 组装JS格式代码
function genJSCode(key, value) {
    return 'var ' + key + ' = ' + value + ';\n';
}

// 读取getlib对象,并将其组装成JS代码
//for(var attrib in getlib) {
//    file.appendFile('build.js', genJSCode(attrib, getlib[attrib]));
//}

// 获取getlib对象的另一种方法
//var imObject = global.process.mainModule.children[0].exports;
//for (var attr in imObject) {
//    file.appendFile('build.js', genJSCode(attr, imObject[attr]));
//}

// 获取所有导入的库
for ( var i = 0; i < global.process.mainModule.children.length; i++) {
    var imObject = global.process.mainModule.children[i].exports;
    for (var attr in imObject) {
        file.appendFile('build.js', genJSCode(attr, imObject[attr]));
    }
}

// 向build.js文件中写入两句测试代码
file.appendFile('build.js', '//向build.js中写入两句测试代码\n');
file.appendFile('build.js', 'showName();\n');
file.appendFile('build.js', 'console.log(age);\n');
file.appendFile('build.js', 'showPhone();\n');

// 读取(异步)样式文件, 并写入build.js文件
file.readFile("./a.css", function (err, data) {
    if (err) throw err;
    file.appendFile('build.js', '//向build.js中写入样式文件\n');

    var pattern = /['|"](.*\.jpg)['|"]/g;
    var res = pattern.exec(data.toString());
    //console.log(res);
    var imgfn = res[1];
    file.readFile(imgfn, function(err, imgData) {
        if (err) throw err;
        //console.log(imgData);
        //console.log(imgData.toString('base64'));
        data = data.toString().replace(imgfn,
            'data:image/jpg;base64,' + imgData.toString('base64')).trim();
        //console.log(data);
        file.appendFile('build.js', 'document.write("<style>' + data + '</style>");');
    });
    // 因为是异步读取图片文件，所以下面的data还不是base64编码
    console.log(data);
});