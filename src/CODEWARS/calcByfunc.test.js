const test = require('./calcByFunc');

describe('calcByFunc', () => {
  it('seven(times(five())) = 35', () => {
    const result = test.seven(test.times(test.five()));
    expect(result).to.equal(35);
  });

  it('nine(divideBy(six())) = 1', () => {
    const result = test.nine(test.dividedBy(test.six()));
    expect(result).to.equal(1);
  });

  it('eight(minus(seven())) = 1', () => {
    const result = test.eight(test.minus(test.seven()));
    expect(result).to.equal(1);
  });
});
