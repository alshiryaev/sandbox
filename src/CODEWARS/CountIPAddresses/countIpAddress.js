// https://www.codewars.com/kata/526989a41034285187000de4/train/javascript

/*
 * With input "10.0.0.0", "10.0.0.50"  => return   50
 * With input "10.0.0.0", "10.0.1.0"   => return  256
 * With input "20.0.0.10", "20.0.1.0"  => return  246

doTest("10.11.12.13", "10.11.13.0", 243);
doTest("160.0.0.0", "160.0.1.0", 256);
doTest("170.0.0.0", "170.1.0.0", 65536);
doTest("50.0.0.0", "50.1.1.1", 65793);
doTest("180.0.0.0", "181.0.0.0", 16777216);
doTest("1.2.3.4", "5.6.7.8", 67372036);
 */
/**
 *
 * @param {string} start
 * @param {string} end
 */
function ipsBetween(start, end) {
  start = start.split(".");

  return end.split(".").reduce(function (sum, x, i) {
    console.log(sum << 8);
    return (sum << 8) + Number(x) - Number(start[i]);
  }, 0);
}

console.log(ipsBetween("10.0.0.0", "10.0.0.50")); // 50
console.log(ipsBetween("10.0.0.0", "10.0.1.0")); // 246

module.exports = {
  ipsBetween,
};
