function rev(num) {
  let revnum = 0;
  while (num > 0) {
    revnum = revnum * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return revnum;
}

console.log(rev(456));
console.log(rev(1234));
