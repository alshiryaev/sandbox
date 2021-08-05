const merge = require('./merge');
const { expect } = require('chai');

describe('merge', function(){

    it('merges', function() {
       const a1 = [1,3,5];
       const a2 = [2,4,6];

       expect(merge(a1, a2)).to.deep.equals([1,2,3,4,5,6]);
    });

    it('merges', function() {
        const a1 = [1,5];
        const a2 = [2,4,6];
 
        expect(merge(a1, a2)).to.deep.equals([1,2,4,5,6]);
     });
});
