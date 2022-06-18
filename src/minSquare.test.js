const minSquare = require('./minSquare');

test('minSquare', () => {
    expect(minSquare(1680, 640)).toEqual([80, 80]);
    expect(minSquare(160, 80)).toEqual([80, 80]);
    expect(minSquare(12, 2)).toEqual([2, 2]);
    expect(minSquare(5, 4)).toEqual([1, 1]);
    expect(minSquare(24, 14)).toEqual([2, 2]);
    expect(minSquare(100, 100)).toEqual([100, 100]);
    expect(minSquare(24, 13)).toEqual([1, 1]);
    expect(minSquare(100, 30)).toEqual([10, 10]);
});
