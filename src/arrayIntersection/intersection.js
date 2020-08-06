

function intersection(arr1, arr2) {
    const res = arr1.filter(x => arr2.indexOf(x) > -1);
    return res;
}

module.exports = intersection;