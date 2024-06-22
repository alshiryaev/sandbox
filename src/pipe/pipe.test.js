const {pipe} = require('./pipe');

describe("pipe", () => {
  test("A correct order", () => {
    const double = (x) => x * 2;
    const plusOne = (x) => x + 1;

    const res = pipe(double, plusOne)(2);
    expect(res).toBe(5);
  });
});
