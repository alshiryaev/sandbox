const {expect} = require('chai');
const getSimpleNumbers = require('./simpleNumbers');

describe('getSimpleNumbers', () => {

  it('2..10 => 2 3 5 7 = true', () => {
    const result = getSimpleNumbers(2, 10);
    expect(result).deep.equal([2,3,5,7]);
  });

  it('90...100 => 97 = true', () => {
    const result = getSimpleNumbers(90, 100);
    expect(result).deep.equal([97]);
  });

});