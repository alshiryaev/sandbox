const {longestCommonPrefix} = require('./longestCommonPrefix');
const {expect} = require('chai');

describe('longestCommonPrefix', () => {
    it('["flower", "flow", "flight"] => fl', () => {
        expect(longestCommonPrefix(["flower", "flow", "flight"]))
            .equals('fl')
    });
    
    it('["dog", "racecar", "car"] => <>', () => {
        expect(longestCommonPrefix(["dog", "racecar", "car"]))
            .equals('')
    });
})