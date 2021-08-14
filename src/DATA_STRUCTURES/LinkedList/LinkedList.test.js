const {LinkedList} = require('./linkedList');
const {describe, it, beforeEach} = require('mocha');
const {expect} = require('chai');

describe('LinkedList', () => {

    let linkedList = null;
    beforeEach(() => {
        linkedList = new LinkedList();
    });

    it('An empty list is empty is true ', () => {
        expect(linkedList.isEmpty()).false;
    });

});
