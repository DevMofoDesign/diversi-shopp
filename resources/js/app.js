require("@babel/polyfill");
require('./bootstrap');

/**
 * Ações da função API Semantic-UI
 */
require('./api/api_config');

/**
 * Start UI Build
 */
require("./ui/_start");

/**
 * Start API
 */
require("./api/_start");

if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)){
    $(window).scroll(function () {
        //console.log($(document).scrollTop());
        
        if ($(document).scrollTop() >= 30) {
            $("#menu").attr('style', 'position: fixed; top:0px; z-index:9999;');
        } else {
            $("#menu").attr('style', '');
        }
    });
}