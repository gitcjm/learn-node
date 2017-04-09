/**
 * created by cjm on 4/9/2017
 *  使用for...in... 获取对象的属性
 */

var getlib = require('cjmlib');

for (var attrib in getlib) {
	if (attrib != 'age')
		console.log(getlib[attrib]());
}
