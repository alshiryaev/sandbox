const romanToInt = function (s) {
    const hash = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let acc = 0;
    for (let index = 0; index < s.length; index++) {
        const prev = index === 0 ? 0 : hash[s[index - 1]];
        const current = hash[s[index]];

        if (current / prev === 5 || current / prev === 10) {
            acc = acc - prev + current - prev;
        } else {
            acc = acc + current;
        }
    }

    return acc;
};