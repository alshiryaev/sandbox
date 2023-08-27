const { linkedListToNumber, ListNode } = require("./linked-list-to-number");
describe("linked-list-to-number", () => {
  test("return number", () => {
    const l1 = new ListNode(3, new ListNode(2, new ListNode(1, null)));

    expect(linkedListToNumber(l1)).toBe(321);
  });

  test("return not reversed number", () => {
    const l1 = new ListNode(3, new ListNode(2, new ListNode(1, null)));

    expect(linkedListToNumber(l1)).not.toBe(123);
  });
});
