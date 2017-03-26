/**
 * @file xhr.js
 * @author William Bruno <wbrunom@gmail.com>
 * @date 2014-02-20
 */

XHR = (function(){
    "use strict";

    var module = {};

    module._init = function () {
        return new XMLHttpRequest();
    };
    module._onReady = function (xmlhttp, cb) {
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.status === 200 && xmlhttp.readyState === 4) {
                cb(xmlhttp.responseText);
            }
        };
    };
    module._setHeaders = function (xmlhttp) {
        xmlhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xmlhttp.setRequestHeader("Accept","text/plain");
        xmlhttp.setRequestHeader("Content-Type","text/plain");
    };
    module.get = function (url, cb) {
        var xmlhttp = module._init();

        xmlhttp.open("GET", url, true);
        module._setHeaders(xmlhttp);
        xmlhttp.send(null);

        module._onReady(xmlhttp, cb);
    };
    module.post = function (url, data, cb) {
        var xmlhttp = module._init();

        xmlhttp.open("POST", url, true);
        module._setHeaders(xmlhttp);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttp.send(data);

        module._onReady(xmlhttp, cb);
    };

    return {
        get: module.get,
        post: module.post
    }

}());