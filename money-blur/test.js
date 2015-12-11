var assert = require('assert'),
    mb = require('./money-blur');

describe('_format', function() {
  it(',10 -> 0,10', function() {
    var v = mb._format(',10')
    assert.equal(v, '0,10');
  });

  it('.10 -> 0,10', function() {
    var v = mb._format('.10')
    assert.equal(v, '0,10');
  });

  it('100 -> 100,00', function() {
    var v = mb._format('100')
    assert.equal(v, '100,00');
  });

  it('10,10 -> 10,10', function() {
    var v = mb._format('10,10')
    assert.equal(v, '10,10');
  });

  it('10.10 -> 10,10', function() {
    var v = mb._format('10.10')
    assert.equal(v, '10,10');
  });

  it('10,1 -> 10,10', function() {
    var v = mb._format('10,1');
    assert.equal(v, '10,10');
  });

  it('10.1 -> 10,10', function() {
    var v = mb._format('10.1');
    assert.equal(v, '10,10');
  });
});
