// sorteio.test.js

describe('sorteio 1-8', function() {
  var result;
  beforeEach(function() {
    result = randomBetween([1,2,3,4,5,6,7,8]);
  });

  it('the random number should be natural',function() {
    expect(typeof result).toBe('number');
    expect(/^\d+$/.test(result)).toBeTruthy();
    expect(result % 1 === 0).toBeTruthy();
  });

  it('a random number between 1 and 8',function() {
    expect(result).toBeLessThan(9);
    expect(result).toBeGreaterThan(0);
  });

  it('4 calls should have at least one different',function() {
    var arr = [];
    arr.push(randomBetween([1,2,3,4,5,6,7,8]))
    arr.push(randomBetween([1,2,3,4,5,6,7,8]))
    arr.push(randomBetween([1,2,3,4,5,6,7,8]))
    arr.push(randomBetween([1,2,3,4,5,6,7,8]))
    arr.push(randomBetween([1,2,3,4,5,6,7,8]))
    arr.push(randomBetween([1,2,3,4,5,6,7,8]))
    arr.push(randomBetween([1,2,3,4,5,6,7,8]))

    var first = arr[0];

    var result = arr.filter(function(i) {
      return i === first;
    });

    expect(result.length).not.toBe(arr.length);
    expect(result.length).toBeLessThan(arr.length);
  });

  it('should accept a array with positive integers',function() {

    expect(function() {
      randomBetween([1,2,'3','bruno']);
    })
    .toThrowError('I only accept array of ints');

  });

});
