const { twoSum } = require("./twoSum");

test("twoSum", () => {
  const r1 = twoSum([3, 2, 4], 6);
  expect(r1).toEqual([1, 2]);

  const r2 = twoSum([3, 3], 6);
  expect(r2).toEqual([0, 1]);
});
