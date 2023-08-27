// https://www.codewars.com/kata/54a305521817ec2f1b001512/train/javascript

function multiply(value, times) {

  if (value == null || value == undefined) {
    return value;
  }

  if (typeof value === "number") {
    return +value * times;
  }

  if (typeof times !== "number" || times % 1 !== 0) {
    throw new Error();
  }
  if (typeof value === "function") {
    if (typeof value === "function") {
      return function() {
        for (let i = 0; i < times; i++) {
          value.apply(this, arguments);
        }
      };
    }
  }

  if (typeof value === "object") {
    return new Array(times).fill(0).map(() => value);
  }

  if (typeof value === "string") {
    return value.toString().repeat(times);
  }

  return value;
}

console.log(multiply("hello", 3));
console.log(multiply(10, 3));
multiply(() => console.log("func"), 0);
