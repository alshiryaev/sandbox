const merge = require('./merge');

test('merge', function () {

   const a1 = [1, 3, 5];
   const a2 = [2, 4, 6];
   expect(merge(a1, a2)).toEqual([1, 2, 3, 4, 5, 6]);

   const a11 = [1, 5];
   const a12 = [2, 4, 6];
   expect(merge(a11, a12)).toEqual([1, 2, 4, 5, 6]);

});
