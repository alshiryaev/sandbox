// https://leetcode.com/problems/maximum-69-number/description/

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {

    let sum = 0, i = 0;
    let n = num, t = 0;

    while(n > 0) {

        t = n % 10;
        n = Math.floor(n / 10);

        if (t === 6) {
            sum = 3 * Math.pow(10, i);
        }
        i++;

    }

    return num + sum;
    
};

module.exports = {
    maximum69Number,
};
