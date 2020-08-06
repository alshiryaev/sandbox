function partition(items, left, right) {
    const pivot = items[Math.floor((left + right) * 0.5)];
    while (left <= right) {

        // Сдвигаем указатели

        while (items[left] < pivot) {
            left++;
        }

        while (items[right] > pivot) {
            right--;
        }

        // Если мы так и не дошли до центра
        // то это означает , что элементы не стоят на своем месте
        if (left <= right) {

            // Замена
            const temp = items[left];
            items[left] = items[right];
            items[right] = temp;

            // Сдвигаем указатели

            left++;
            right--;
        }
    }

    return left;

}


function quickSort(items, left = 0, right = (items.length - 1)) {

    if (items.length > 1) {
        // Возврат левой границы кусочка массива 
        // (получается справа значения уже раскиданы, но не отсортированы)
        const index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }

        if (right > index) {
            quickSort(items, index, right);
        }
    }

    return items;
}


module.exports = quickSort;