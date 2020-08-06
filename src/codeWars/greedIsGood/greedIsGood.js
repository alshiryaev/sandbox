// https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript

const { add } = require("lodash");

function score(dice) {

    const hash = {};
    let sum = 0;
    for (item of dice) {

        if (item in hash) {
            hash[item]++;
        } else {
            hash[item] = 1;
        }
    }

    for (let property of Object.keys(hash)) {

        const key = +property;
        const value = hash[key];
        let coeff = key === 1 ? 10 * key : key;

        if (value >= 3) {

            sum += (coeff * 100);
            if (key === 1 || key === 5) {
                const addt = coeff * 10 * (value - 3);
                sum += addt;
            }


        } else {

            const calculatedValue = (key === 1 || key === 5) ? coeff * 10 * value : 0;
            sum += calculatedValue;
        }
    }

    console.log(hash, sum);
    return sum;

}

const a = [5, 1, 3, 4, 1]; // 250
const b = [4, 4, 4, 3, 3]; // 400
const c = [2, 4, 4, 5, 4]; // 450
const d = [1, 1, 1, 3, 1]; // 1100

const e = [1, 1, 1, 1, 1]; // 1200

score(a);
// score(b);
// score(c);
// score(d);
 score(e);