const areAnagrams = (a, b) => {
    const aSet = getSet(a);
    const bSet = getSet(b);
    return compareObjects(aSet, bSet);
}

const getSet = (str) => {
    return str.split('').reduce((acc, curr) => {
        acc[curr] = curr in acc ? acc[curr] += 1 : 1;
        return acc;
    }, {});
}

const compareObjects = (a, b) => {
    let result = false;
    for (let aKey in a) {
        const aValue = a[aKey];
        result = aKey in b && b[aKey] === aValue;
        if (!result) {
            break;
        }
    }
    return result;

};

module.exports = { areAnagrams, compareObjects }
