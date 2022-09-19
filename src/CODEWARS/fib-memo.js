// https://www.codewars.com/kata/529adbf7533b761c560004e5/train/javascript

const map = new Map();

export function fibonacci(n) {
  if (n < 2)
    return n;
  if (!map.has(n)) {
    map.set(n, fibonacci(n - 1) + fibonacci(n - 2));
  }
  return map.get(n);
}