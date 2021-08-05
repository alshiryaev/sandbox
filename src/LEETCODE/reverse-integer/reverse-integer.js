function reverseInteger(number) {
  let x = Math.abs(number), result = 0;
  while (x !==0 ) {
    const last = x % 10;
    x = Math.floor(x / 10);
    result = result * 10 + last;
  }

  return result * Math.abs(number) / number;
}

console.log(reverseInteger(123));
console.log(reverseInteger(-541));