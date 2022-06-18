<<<<<<< HEAD
const fn = require('./calcByFunc');
=======
const test = require('./calcByFunc');
>>>>>>> 447f2c5666d1a287165cb3c2f915f4a567e9d12f

test('calcByFunc', () => {
  
    const result1 = fn.seven(fn.times(fn.five()));
    expect(result1).toEqual(35);
    
    const result2 = fn.nine(fn.dividedBy(fn.six()));
    expect(result2).toEqual(1);
    
    const result3 = fn.eight(fn.minus(fn.seven()));
    expect(result3).toEqual(1);
    
});
