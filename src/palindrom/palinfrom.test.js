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

    it('<empty string>', () => {

        const result = palindrom('');
        expect(result).to.be.false;

    });

    it('0', () => {

        const result = palindrom('0');
        expect(result).to.be.false;

    });

});