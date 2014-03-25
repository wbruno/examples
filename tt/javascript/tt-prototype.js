(function(){
	"use strict";

	function Tooltip() {}
	Tooltip.prototype.init = function(objs) {
		var i = objs.length;
		while(i--) {
			var obj = objs[i],
				wrap = this.createWrap(obj),
				ttContent = this.getContent(obj);

			wrap.appendChild(ttContent);
		}
		return objs;
	};
	Tooltip.prototype.createWrap = function(obj) {
		var wrap = document.createElement('span');
		wrap.className = 'tt-wrap';
		obj.parentNode.replaceChild(wrap, obj);
		wrap.appendChild(obj);
		return wrap;
	};
	Tooltip.prototype.getContent = function(obj) {
		var rel = obj.getAttribute('data-rel');
		return document.querySelector(rel);
	};


	var $ = function(selector) {
		return document.querySelectorAll(selector);
	};
	document.addEventListener("DOMContentLoaded", function() {
		var tt = new Tooltip();
		tt.init($('.tt'));
		tt.init($('#another'));
	});
}());