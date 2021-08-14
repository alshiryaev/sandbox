const { expect } = require("chai");
const { qsort } = require("./quickSort");
const { describe, it } = require("mocha");

describe("quickSort", () => {
  it("[2,1,0,7,3] => [0,1,2,3,7]", () => {
    expect(qsort([2, 1, 0, 7, 3])).to.deep.equals([0, 1, 2, 3, 7]);
  });

  it("[6,5,4,3,2,1,0] => [0,1,2,3,4,5,6]", () => {
    expect(qsort([6, 5, 4, 3, 2, 1, 0])).to.deep.equals([0, 1, 2, 3, 4, 5, 6]);
  });

  it("[2,1] => [1,2]", () => {
    expect(qsort([2, 1])).to.deep.equals([1, 2]);
  });

  it("[1] => [1]", () => {
    expect(qsort([1])).to.deep.equals([1]);
  });

  it("[] => []", () => {
    expect(qsort([])).to.deep.equals([]);
  });

  it("[2,1,3,5,6,4,4,4] => [1,2,3,4,4,4,5,6]", () => {
    expect(qsort([2, 1, 3, 5, 6, 4, 4, 4])).to.deep.equals([
      1, 2, 3, 4, 4, 4, 5, 6,
    ]);
  });
});
