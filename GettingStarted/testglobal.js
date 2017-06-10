/**
 * 使用 global 全局变量获取所有引用的模块 
 */

var getlib = require('cjmlib');

//console.log(global);
//console.log(global.process.mainModule.children);
//console.log(global.process.mainModule.children.exports);	// failed
console.log(global.process.mainModule.children[0].exports);
