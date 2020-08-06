const RLE = str => {

    if (!str || !str.length)
        throw new Error('agrument exception');
    let temp = str[0], count = 0, result = '';

    for (let i = 0; i < str.length; i++) {
        const current = str[i];
        if (current === temp) {
            count += 1;
            continue;
        }
        result += `${temp}${count === 1 ? '' : count}`;
        count = 1;
        temp = current;
    }
    result += `${temp}${count === 1 ? '' : count}`;
    return result;
}

module.exports = RLE;


