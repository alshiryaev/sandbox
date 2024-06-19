// 2 x (3 + 4)

const map = new Map([
  ["x", 1],
  [":", 1],
  ["+", 2],
  ["-", 2],
]);

/**
 * Calculate expression
 * @param {string} expression
 * @returns {number}
 */
function caclulator(expression) {}

// create a polish notation
// work by a stack data structure
// For example

// Given an expression 2 x (4 + 3) + 5 -> 2
function createPolishNotation(expression) {
  let res = "";
  const stack = []; // remove -> shift; add -> unshift

  for (const s of expression) {
    if (!Number.isNaN(Number(s))) {
      res += s;
    } else {
      if (s === "(") {
        stack.unshift(s);
        continue;
      }

      if (s === ")") {
        while (stack[0] !== "(") {
        const e  = stack.shift();

          res += e;
          console.log(e);
        }
        stack.shift(); // remove "("
        continue;
      }
      while (map.get(s) >= map.get(stack[0])) {
        res += stack.shift();
      }
      stack.unshift(s);
    }
  }
  
  return res + stack.reduce((prev, curr) => {
    return prev + curr;
  }, '');
}

console.log(createPolishNotation("6+3x(1+4x5)x2")); // 63145x+x2x+

module.exports = {
  caclulator,
};
