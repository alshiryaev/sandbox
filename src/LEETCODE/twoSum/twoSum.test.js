const { twoSum } = require("./twoSum");
const { expect } = require("chai");

describe("twoSum", () => {
  it("[3, 2, 4], 6 => [1,2]", () => {
    const result = twoSum([3, 2, 4], 6);
    expect(result).to.deep.equals([1, 2]);
  });
});
