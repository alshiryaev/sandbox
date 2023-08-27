const {
  linkedListToReverseNumber,
} = require("./linked-list-to-reverse-number");
describe("linked-list-to-reverse-number", () => {
  const l1 = new ListNode(3, new ListNode(2, new ListNode(1, null)));
  const l2 = new ListNode(
    3,
    new ListNode(
      3,
      new ListNode(
        2,
        new ListNode(
          2,
          new ListNode(
            4,
            new ListNode(
              4,
              new ListNode(
                8,
                new ListNode(
                  8,
                  new ListNode(1, new ListNode(2, new ListNode(3)))
                )
              )
            )
          )
        )
      )
    )
  );

  test("321 => 123", () => {
    expect(linkedListToReverseNumber(l1)).toBe(123);
  });

  test("33224488123 !== 32188442233", () => {
    expect(linkedListToReverseNumber(l1)).toBe(123);
  });
});
