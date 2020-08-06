module.exports = function getSimpleNumbers(from = 2, to) {
  const resultValues = [];
  for (let i = from; i <= to; i++) {
    for (let j = 2; j <= i; j++) {
      if (i % j == 0 && i != j) {
        break;
      } else if (i == j) {
        resultValues.push(i);
      }
    }
  }

  return resultValues;
}
