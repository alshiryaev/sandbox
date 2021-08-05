
const jewelryInStones = (jewelry, stones) => {
    let result = 0;
    for (let index = 0; index < stones.length; index++) {
        const letter = stones[index];
        if (jewelry.indexOf(letter) !== -1) {
            result += 1;
        }
    }
    return result;
}

module.exports = jewelryInStones;