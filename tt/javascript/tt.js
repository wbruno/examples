function init(objs) {
	var i = objs.length;
	while(i--) {
		var obj = objs[i],
			wrap = createWrap(obj),
			ttContent = getContent(obj);

		wrap.appendChild(ttContent);
	}
};
function createWrap(obj) {
	var wrap = document.createElement('span');
	wrap.className = 'tt-wrap';
	obj.parentNode.replaceChild(wrap, obj);
	wrap.appendChild(obj);
	return wrap;
};
function getContent(obj) {
	var rel = obj.getAttribute('data-rel');
	return document.querySelector(rel);
};
function $(selector) {
	return document.querySelectorAll(selector);
};

document.addEventListener("DOMContentLoaded", function() {
	init($('.tt'));
	init($('#another'));
});
