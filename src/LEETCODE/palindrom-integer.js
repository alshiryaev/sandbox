/**
 * Is a number palindrome
 * @param n {number}
 * @return {boolean}
 */
function palindromInteger(n) {
    if (n < 0) {
        return false;
    }

    let res = 0, x = n;
    while (x !== 0) {
        const last = x % 10;
        x = Math.floor(x / 10);
        res = res * 10 + last;
    }

    return res === n;
}

console.log(palindromInteger(123));
console.log(palindromInteger(121));