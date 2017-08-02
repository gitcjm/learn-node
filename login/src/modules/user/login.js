/**
 * Created by cjm on 6/1/17.
 */

// var $ = require('jquery'); //在webpack.config.js中已经设置了全局引用

require('../../css/user.css');

/*
alert('这是登录页面');

$('#cmdLogin').click(function() {
    alert('登录');
})*/

require('../jq_plugins/jquery.formInputLetter.js');
require('../jq_plugins/jquery.validate.min.js');

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
