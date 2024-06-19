// https://www.codewars.com/kata/58942f9175f2c78f4b000108/train/javascript

/**
 *
 * @param {string} str
 * @returns {string}
 */
function buildPalindrome(str) {
  let i = 0;
  let res = '';
  let flag = compare(str); // false - it's a palindrome

  while (flag) {
    res = str[i++] + res;
    console.log('res = ', res);
    flag = compare(str + res);
  }
  return str + res;
}

function compare(str) {
  let left = str.split("").reverse().join("");
  let rigth = str.split("").join("");
  return left !== rigth;
}

console.log(buildPalindrome("abcdc")); //abcdcba
// console.log(buildPalindrome("cacbcbb"));
// console.log(buildPalindrome("fdf")); // fdfdf
// console.log(buildPalindrome("aaaa")); // aaaaa
