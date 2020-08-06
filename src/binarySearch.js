module.exports = binarySearch = (items, number) => {
    let left = 0, right = items.length - 1;
    while (left <= right) {
        let index = Math.floor((left + right) * 0.5);
        let currentElement = items[index];
        if (currentElement == number)
            return index;

        if (number > currentElement)
            left = index + 1;

        if (number < currentElement)
            right = index - 1;

    }
}


