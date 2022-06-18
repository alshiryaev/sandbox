const { qsort } = require("./quickSort");

test("quickSort", () => {
    expect(qsort([2, 1, 0, 7, 3])).toEqual([0, 1, 2, 3, 7]);
    expect(qsort([6, 5, 4, 3, 2, 1, 0])).toEqual([0, 1, 2, 3, 4, 5, 6]);
    expect(qsort([2, 1])).toEqual([1, 2]);
    expect(qsort([1])).toEqual([1]);
    expect(qsort([])).toEqual([]);
    expect(qsort([2, 1, 3, 5, 6, 4, 4, 4])).toEqual([
      1, 2, 3, 4, 4, 4, 5, 6,
    ]);
});
