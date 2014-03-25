var tt = (function(){
	"use strict";
	var module = {};

	module.createWrap = function(obj) {
		var wrap = document.createElement('span');
		wrap.className = 'tt-wrap';
		obj.parentNode.replaceChild(wrap, obj);
		wrap.appendChild(obj);
		return wrap;
	};
	module.init = function(objs) {
		var i = objs.length;
		while(i--) {
			var obj = objs[i],
				wrap = module.createWrap(obj),
				ttContent = module.getContent(obj);

			wrap.appendChild(ttContent);
		}
		return objs;
	};
	module.getContent = function(obj) {
		var rel = obj.getAttribute('data-rel');
		return document.querySelector(rel);
	};

	return {
		init : module.init
	};
}());

var $ = function(selector) {
	return document.querySelectorAll(selector);
};
document.addEventListener("DOMContentLoaded", function() {
	console.log(tt);//Object { init=function()}
	console.log(tt.createWrap);//undefined
	tt.init($('.tt'));
	tt.init($('#another'));
});