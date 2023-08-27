const { arrayToLinkedList } = require('./array-to-linked-list');

describe('array-to-linked-list', () => {
    test('[123] => 1->2->3', () => {
        const arr = [1,2,3];
        const l = arrayToLinkedList(arr);

        expect(l.val).toBe(1);
        expect(l.next.val).toBe(2);
        expect(l.next.next.val).toBe(3);
        expect(l.next.next.next).toBeNull();
    });
});