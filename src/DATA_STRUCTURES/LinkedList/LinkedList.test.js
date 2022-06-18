const { LinkedList } = require('./linkedList');

test('LinkedList', () => {
    let linkedList = new LinkedList();
    expect(linkedList.isEmpty).toBe(true);
    
    linkedList.addNode(12);
    expect(linkedList.lenght).toEqual(1);
});
