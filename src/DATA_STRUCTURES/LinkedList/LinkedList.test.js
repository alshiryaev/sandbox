const {LinkedList} = require('./linkedList');
const {describe, it, beforeEach} = require('mocha');
const {expect} = require('chai');

describe('LinkedList', () => {

    let linkedList = null;
    beforeEach(() => {
        linkedList = new LinkedList();
    });

    it('An empty list is empty is true ', () => {
        expect(linkedList.isEmpty).true;
    });

    it('Add node lenght = 1', () => {
        linkedList.addNode(12);
        expect(linkedList.lenght).equals(1);
    });

    it('Remove node', () => {
        linkedList.addNode(1);
        linkedList.addNode(2);
        linkedList.removeAt(1);
        expect(linkedList.lenght).equals(1);
    });

});
