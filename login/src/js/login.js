/**
 * Created by cjm on 6/1/17.
 */

// var $ = require('jquery'); //在webpack.config.js中已经设置了全局引用

require('../css/user.css');

/*
alert('这是登录页面');

$('#cmdLogin').click(function() {
    alert('登录');
})*/

require('../lib/jquery.formInputLetter.js');
require('../lib/jquery.validate.min.js');

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
})
