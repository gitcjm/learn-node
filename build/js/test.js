var getlib = require('cjmlib');

for (var attrib in getlib) {
	if (attrib != 'age')
		console.log(getlib[attrib]());
}
