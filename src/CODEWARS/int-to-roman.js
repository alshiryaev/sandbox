function intToRoman(number) {
    const romanNumberMap = new Map([
        [1, 'I'],
        [5, 'V'],
        [10, 'X'],
        [50, 'L'],
        [100, 'C'],
        [500, 'D'],
        [1000, 'M']
    ]);

    if (romanNumberMap.get(number) !== undefined) {
        return romanNumberMap.get(number);
    }

    const res = '';
    while (number > 0) {
        const fraction = number % 10;
        // for (const [key, value] of romanNumberMap) {
        //     if (number === key) {
        //         res += value;
        //     }

        //     if (fraction ==)
        // }
        number = Math.floor(number / 10);
        console.log(number, fraction);
    }

    return res;
}

// console.log(intToRoman(50)); // L
console.log(romanToArab('LXXXIV'));
// console.log(intToRoman(84)); // LXXXIV