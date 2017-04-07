var getlib = require('slib');

//console.log(global);
//console.log(global.process.mainModule.children);
//console.log(global.process.mainModule.children.exports);	// failed
console.log(global.process.mainModule.children[0].exports);
