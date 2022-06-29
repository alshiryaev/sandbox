
const fn = require('./calcByFunc');

test('calcByFunc', () => {
  
    const result1 = fn.seven(fn.times(fn.five()));
    expect(result1).toEqual(35);
    
    const result2 = fn.nine(fn.dividedBy(fn.six()));
    expect(result2).toEqual(1);
    
    const result3 = fn.eight(fn.minus(fn.seven()));
    expect(result3).toEqual(1);
    
});
