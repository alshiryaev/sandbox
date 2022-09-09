// https://www.codewars.com/kata/58942f9175f2c78f4b000108/train/javascript

/**
 * 
 * @param {string} str 
 * @returns {string}
 */
function buildPalindrome(str) {
  
  let i = 0;
  let res = '';
  let flag = str.split('').reverse().join('') !== str.split('').join('');
  while (flag) {
    res = str[i++] + res;
    const t = str + res;
    flag = 
    t.split('').reverse().join('') !== t.split('').join('');
  }
  return str + res;
  
}


console.log(buildPalindrome('abcdc')); //abcdcba
console.log(buildPalindrome('cacbcbb'));
console.log(buildPalindrome('fdf')); // fdfdf
console.log(buildPalindrome('aaaa')); // aaaaa

