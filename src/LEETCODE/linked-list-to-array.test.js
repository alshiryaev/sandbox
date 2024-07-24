const { arrayFromLinkedList, arrayToLinkedList } = require('./array-to-linked-list');

describe('arrayFromLinkedList', () => {
    test('1->2->3 -> [123]', () => {
        const arr = [1,2,3];
        const l = arrayToLinkedList(arr);
        const res = arrayFromLinkedList(l);

        expect(res.length).toBe(3);
        expect(res).toEqual([1,2,3]);
    });

    test('1 -> [1]', () => {
        const arr = [1];
        const l = arrayToLinkedList(arr);
        const res = arrayFromLinkedList(l);

        expect(res.length).toBe(1);
        expect(res[0]).toBe(1);
    });
});