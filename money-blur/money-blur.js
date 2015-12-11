'use strict';
function _signalFirst(v) {
  return /^(,|\.)/.test(v);
}
function _signalOne(v) {
  return /,|\.+\d$/.test(v);
}
function _onlyNumber(v) {
  return /^\d+$/.test(v);
}
function _rightPosition(v) {
  return /(,|\.)\d{2}$/.test(v);
}
function _format(v) {
  var length = v.length;

  if (_signalFirst(v)) {
    console.log('_signalFirst');

    v = v.replace(/[,.]/, '');
    if (length===2) v = '0,' + v + '0';
    else v = '0,' + v;
  } else if (_onlyNumber(v)) {
    console.log('_onlyNumber');

    v = v + ',00';
  } else if (_rightPosition(v)) {
    console.log('_rightPosition');

    v = v.replace(/[,.]/, '');
    v = v.replace(/(\d)(\d{2})$/, '$1,$2');
  } else if (_signalOne(v)) {
    console.log('_signalOne');

    v = v.replace(/[,.]/, '');
    v = v + '0';
    v = v.replace(/(\d)(\d{2})$/,"$1,$2");
  } else {
    v = v.replace(/[,.]/, '');
    v = v.replace(/(\d{1,3})$/g,"$1,00");
    v = v.replace(/(\d{1,3})(\d{3},00)$/,"$1.$2");
  }
  return v;
}

if (typeof exports !== 'undefined') {
  if (typeof module !== 'undefined' && module.exports) {
    exports = module.exports = _format;
  }
  exports._format = _format;
}
