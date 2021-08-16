// https://leetcode.com/problems/roman-to-integer/
 function romanToInt(rn) {
    const romanNumbers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500
    };


    const arr = rn.split('').map(c => romanNumbers[c]);
    for (let index = 1; index < arr.length; index ++) {
        const prev = arr[index - 1];
        const current = arr[index];

        console.log(prev, current);
    }
}



romanToInt('XLIX');