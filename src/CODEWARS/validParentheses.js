// https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript
export function validParentheses(parens) {
  let stack = [];
  for (let s of parens) {
    if (s === ")" && stack.length > 0 && stack[0] === "(") {
      stack.splice(0, 1);
    } else {
      stack = [s].concat(...stack);
    }
  }
  return stack.length === 0;
}

// I like this good solition (not mine)
export function validParenthesesPro(parens) {
    let n = 0;
    for (let s of parens) {
      if (s === '(') n++;
      if (s === '(') n--;
      if (n < 0) return false;
    }
    return n === 0;
  }