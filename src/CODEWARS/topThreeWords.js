
function topThreeWords(text) {

    let str = '', obj = {}, max1 = 0, max2 = 0, max3 = 0;
    for (const word of text) {
        if (word != ' ') {
            str += word.toLowerCase();
        } else {
            if (str in obj) {
                obj[str] ++;
            } else {
                obj[str] = 1;
            }

            str = '';
        }
    }

    console.log(obj);

    const res = Object.entries(obj)
        .sort((a,b) => b[1] - a[1]);

    return [res[0][0], res[1][0], res[2][0]];
}

const str = `In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.`;
const str2 = 'a a c b b';

const r1 = topThreeWords(str);
const r2 = topThreeWords(str2);
console.log(r1);
console.log(r2);