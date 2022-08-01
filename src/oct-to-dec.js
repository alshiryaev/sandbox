function octToDec(number) {
    let res = 0;
    let index = 0;
    while (number > 0) {
        const fraction = number % 10;
        number = Math.floor(number / 10);

        res += fraction * Math.pow(8, index++);
    }

    return res;
}