
// https://www.hackerrank.com/challenges/equality-in-a-array/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

function equalizeArray(arr) {

    const map = arr.reduce((prev, current) => {
        if (current in prev) {
            prev[current]++;
        }
         else {
            prev[current] = 1;
        }

        return prev;
    }, {});

    let max = 0, maxKey = null;
    for(const item of Object.entries(map)) {

        const [key, value] = item;
        if (value > max) {
            max = value;
            maxKey = key;
        }
    }
    

    const resultArray = arr.filter(item => item != maxKey);

    return resultArray.length;
}

const arr = [3,3,2,1,3];
console.log(equalizeArray(arr));

console.log(equalizeArray([1,2,3,1,2,3,3,3]));