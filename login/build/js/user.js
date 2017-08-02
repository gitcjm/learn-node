webpackJsonp([3],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(13);
	module.exports = __webpack_require__(16);


/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Created by cjm on 6/1/17.
	 */

	// var $ = require('jquery'); //在webpack.config.js中已经设置了全局引用

	__webpack_require__(14);

	/*
	alert('这是登录页面');

	$('#cmdLogin').click(function() {
	    alert('登录');
	})*/

	__webpack_require__(7);
	__webpack_require__(8);

	//var getHeader = require('../../tpl/header.include');
	// 也可以不在webpack.config中配置, 直接在引用时注明加载器
	//var getHeader = require('raw-loader!../../tpl/header.include');

	$.validator.setDefaults({
	    submitHandler: function() {
	        alert('验证通过');
	    }
	})

	$(document).ready(function () {
	    $('#txtUserLogin').formInputLetter({
	        len: 10,    // 限制输入字符的个数
	        showId: 'lenMsg'    // 显示剩余字符个数的标签ID
	    });
	    $('#userfrm').validate();

	    //$('#header').append(getHeader);
	})


/***/ }),

/***/ 14:
/***/ (function(module, exports) {

	// removed by extract-text-plus-webpack-plugin

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

	/**
	 * Created by cjm on 6/1/17.
	 */

	// var $ = require('jquery'); //在webpack.config.js中已经设置了全局引用

	$('#cmdReg').click(function() {
	    alert('注册');
	})

/***/ })

});