/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let res = 0;
    let left = 0;
    const map = {};
    
    for (const [right, p] of Object.entries(s)) {
        map[p] = map[p] ? map[p] + 1 : 1;

        // Когда разница равна 3 
        // начинаем проверять что мы насчитали
        if (right - left === 3) {

            // Уменьшаем символы которые были слева
            const leftChar = s[left];
            map[leftChar] -= 1;

            // Нули не держим 
            if (map[leftChar] === 0) {
                delete map[leftChar];
            }

            // Увеличиваем правую границу
            left += 1;
        }

        // Если к этому моменты у нас остается в мапе
        // 3 символа, то инкрементируем счетчик результата
        if (Object.keys(map).length === 3) {
            res += 1;
        }
    }

    return res;
};

console.log(countGoodSubstrings("xyzzaz")); // 1   