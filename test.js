var getlib = require('slib');

for (var attrib in getlib) {
	if (attrib != 'age')
		console.log(getlib[attrib]()); 
}
