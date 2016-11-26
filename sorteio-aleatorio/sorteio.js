// sorteio.js


var randomBetween = function(arr) {
  // var isAllInt = arr.every(function(i) {
  //   return isNatural(i);
  // });

  var isAllInt = arr.every(isNatural);

  if(!isAllInt) {
    throw new Error('I only accept array of ints')
  }

  var size = arr.length; //8
  var rand = parseInt(Math.random() * size, 10);

  return arr[rand];
};

var isNatural = function(n) {
  return /^\d+$/.test(n) && n % 1 === 0 && typeof n === 'number';
};


if (module && exports) {
  module.exports = randomBetween;
}
