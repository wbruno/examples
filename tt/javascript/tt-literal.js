;(function(){
	"use strict";
	var tt = {};
	tt.init = function(objs) {
		var i = objs.length;
		while(i--) {
			var obj = objs[i],
				wrap = tt.createWrap(obj),
				ttContent = tt.getContent(obj);

			wrap.appendChild(ttContent);
		}
	};
	tt.createWrap = function(obj) {
		var wrap = document.createElement('span');
		wrap.className = 'tt-wrap';
		obj.parentNode.replaceChild(wrap, obj);
		wrap.appendChild(obj);
		return wrap;
	};
	tt.getContent = function(obj) {
		var rel = obj.getAttribute('data-rel');
		return document.querySelector(rel);
	};
	var $ = function(selector) {
		return document.querySelectorAll(selector);
	};

	document.addEventListener("DOMContentLoaded", function() {
		tt.init($('.tt'));
		tt.init($('#another'));
	});
}());