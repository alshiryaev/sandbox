const { twoSum } = require("./twoSum");

test("twoSum", () => {
    const result = twoSum([3, 2, 4], 6);
    expect(result).toEqual([1, 2]);
});
