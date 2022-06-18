// Дан массив целых чисел и каждое число встречается 2 раза
// и лишь одно число один раз. Найти это число

// Given an array of integers and each number occurs two times
// and only one number once. Find this number.

function findNumber(array) {
    const map = {};
    for (const item of array) {
        if (item in map) {
            delete map[item];
        } else {
            map[item] = 1;
        }
    }

    return Object.keys(map)[0];
}



const arr = [1,2,3,1,3,2,4,4,9,5,11,11,5];
const res = findNumber(arr);
console.log(res);