// Задаем бинарный вектор и необходимо найти максимальную длину
// последовательности единиц

module.exports = getMaxLength = (array) => {
    let max = 0, curr = 0;
    for (let index = 0; index < array.length; index++) {
        curr = array[index] > 0 ? ++curr : 0;
        max = max > curr ? max : curr;
    }
    return max;
};

