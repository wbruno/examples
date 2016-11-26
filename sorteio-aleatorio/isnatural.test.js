// isnatural.test.js

describe('isnatural', function() {
  it('returns boolean',function() {
    expect(isNatural(1)).toBeTruthy();
    expect(isNatural(1000)).toBeTruthy();

    expect(isNatural(3.5)).toBeFalsy();
    expect(isNatural(-1)).toBeFalsy();
    expect(isNatural('1')).toBeFalsy();
    expect(isNatural('bruno')).toBeFalsy();
    expect(isNatural(true)).toBeFalsy();
    expect(isNatural(false)).toBeFalsy();
    expect(isNatural({})).toBeFalsy();
    expect(isNatural([])).toBeFalsy();
    expect(isNatural(parseInt('a'))).toBeFalsy();
  });
});
