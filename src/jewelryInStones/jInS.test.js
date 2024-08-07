const { jewelryInStones } = require("./jInS");

describe("jewelryInStones", () => {
  test("jewelryInStones", () => {
    expect(jewelryInStones("ab", "aabbccd")).toBe(4);
    expect(jewelryInStones("a", "aabbcad")).toBe(3);
    expect(jewelryInStones("f", "aabbcad")).toBe(0);
    expect(jewelryInStones("abc", "aabbcad")).toBe(6);
    expect(jewelryInStones("", "aabbcad")).toBe(0);
    expect(jewelryInStones("aabbcad", "aabbcad")).toBe(7);
    expect(jewelryInStones('aA', 'aAAbbbb')).toBe(3);
  });
});
