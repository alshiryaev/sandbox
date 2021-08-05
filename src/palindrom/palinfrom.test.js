const palindrom = require('./palindrom');
const { expect } = require('chai');


describe('palindrom', () => {

    it('topot', () => {

        const result = palindrom('topot');
        expect(result).to.be.true;

    });

    it('topor', () => {

        const result = palindrom('topor');
        expect(result).to.be.false;

    });

});