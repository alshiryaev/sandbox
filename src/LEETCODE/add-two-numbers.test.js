const { arrayToLinkedList } = require("./array-to-linked-list");
const { addTwoNumbers } = require("./add-two-numbers");

describe("add-two-numbers", () => {
  test("[2,4,3] [5,6,4] => [708]", () => {
    const l1 = arrayToLinkedList([2, 4, 3]);
    const l2 = arrayToLinkedList([5, 6, 4]);

    const res = addTwoNumbers(l1, l2);

    expect(res.val).toBe(7);
    expect(res.next.val).toBe(0);
    expect(res.next.next.val).toBe(8);
  });
});
