const timeConversion = require('./timeConversion');
const { expect } = require('chai');

describe('timeConversion', () => {
    it('07:05:45PM => 19:05:45', () => {
        const inp = '07:05:45PM';
        const result = timeConversion(inp);
        expect(result).to.equal('19:05:45');
   
    })
});